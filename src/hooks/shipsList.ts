import React from "react";
import { MeasureGroupIdentifier, modifyMeasure, newTwoDimensional } from "@gooddata/sdk-model";
import * as cat from "../catalog";
import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
import { DataViewFacade } from "@gooddata/sdk-ui"
import {formatLargeNumbers} from "../constants";

type Ship = {
    name: string,
    length: string,
    firepower: string,
    crew: string,
    cost: string,
    speed: string,
    servesTo: "Light side" | "Dark side",
};
type ShipsLoadingStatus = "loading" | "success" | "error";
type ShipContext = {
    ships: Ship[],
    status: ShipsLoadingStatus;
};

// Load a complete list of ships from the API
export const ShipsContext = React.createContext<ShipContext>({ships: [], status: "loading"});
export const ShipsProvider = ShipsContext.Provider;

export const useShips = (backend: IAnalyticalBackend, workspaceId: string): ShipContext => {
    const [contextValue, setShips] = React.useState<ShipContext>({ships: [], status: "loading"});

    React.useEffect(() => {
        if (!backend || !workspaceId) {
            return;
        }

        const costMeasure = modifyMeasure(cat.CostInCredits_1.Avg, m => m.format(formatLargeNumbers));

        backend
            .workspace(workspaceId)
            .execution()
            .forItems([
                cat.Name_3,
                cat.ServesTo,
                cat.Length_1.Avg,
                cat.FirepowerRating_1.Avg,
                cat.Crew_1.Avg,
                cat.Passengers_1.Avg,
                costMeasure,
                cat.Mglt.Avg,
            ])
            .withDimensions(...newTwoDimensional([cat.Name_3, cat.ServesTo], [MeasureGroupIdentifier]))
            .execute()
            .then(result => result.readAll())
            .then(data => {
                const facade = DataViewFacade.for(data);
                setShips({
                    ships: facade.data().slices().toArray().map(ds => {
                        const dp = ds.dataPoints(); 
                        const attrs = ds.sliceTitles();
                        return {
                            name: attrs[0],
                            servesTo: attrs[1] as "Light side" | "Dark side",
                            length: dp[0].formattedValue() || "-",
                            firepower: dp[1].formattedValue() || "-",
                            crew: String((Number(dp[2].rawValue) ?? 0) + (Number(dp[3].rawValue) ?? 0)) || "-",
                            cost: dp[4].formattedValue() || "-",
                            speed: dp[5].formattedValue() || "-",
                        };
                    }),
                    status: "success",
                });
            })
            .catch(_error => {
                setShips({ships: [], status: "error"});
            });
    }, [backend, workspaceId]);

    return contextValue;
};
