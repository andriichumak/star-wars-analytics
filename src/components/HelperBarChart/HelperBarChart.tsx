import React from "react";
import { IAttribute, IFilter, IMeasure } from "@gooddata/sdk-model";
import { LoadingComponent, useBackend, useWorkspace, DataViewFacade } from "@gooddata/sdk-ui";
import * as cat from "../../catalog";
import { focusShipContext } from "../../hooks/focusShip";
import { usePageWidth } from "../../hooks/pageWidth";

export type HelperBarChartProps = {
    metric: IMeasure,
    viewBy: IAttribute,
    filters?: IFilter[],
    colorCode?: boolean,
    softFilter?: (item: HelperBarChartDataPoint) => boolean,
    desc?: boolean,
};

type HelperBarChartDataPoint = {
    value: number,
    formattedValue: string,
    key: string,
    lightSide: boolean,
};

type HelperBarChartState = {
    status: "loading" | "success" | "error",
    data: HelperBarChartDataPoint[] | null,
};

// Magic numbers...
const CHART_HEIGHT = 400;
const LEGEND_WIDTH = 280;

export const HelperBarChart: React.FC<HelperBarChartProps> = ({metric, viewBy, filters = [], colorCode = true, softFilter = () => true, desc = false}) => {
    const [state, setState] = React.useState<HelperBarChartState>({status: "loading", data: null});
    const backend = useBackend();
    const workspace = useWorkspace();
    const focusShip = React.useContext(focusShipContext);
    const pageWidth = usePageWidth();
    const chartWidth = pageWidth < 1100
        ? Math.max(pageWidth - 79, 350)
        : pageWidth >= 1280
            ? 550
            : pageWidth / 2 - 100;
    const barsWidth = chartWidth - LEGEND_WIDTH;

    React.useEffect(() => {
        if (!backend || !workspace)
            return;

        setState({status: "loading", data: null});

        const items = [metric, viewBy];

        if (colorCode) {
            items.push(cat.ServesTo);
        }

        backend
            .workspace(workspace)
            .execution()
            .forItems(items, filters)
            .execute()
            .then(res => res.readAll())
            .then(data => {
                const processedData = DataViewFacade.for(data).data().slices().toArray().map(ds => {
                    const dataPoints = ds.dataPoints();
                    const attrs = ds.sliceTitles();

                    return {
                        key: attrs[0],
                        value: Number(dataPoints[0].rawValue) || 0,
                        formattedValue: dataPoints[0].formattedValue() || "-",
                        lightSide: attrs[1] === "Light side",
                    };
                });

                setState({
                    status: "success",
                    data: processedData,
                });
            })
            .catch(_e => {
                setState({status: "error", data: null});
            });
    }, [metric, viewBy, colorCode, backend, workspace]);

    const [effectiveData, max] = React.useMemo(() => {
        const data = [...(state.data ?? [])];

        data.sort((a, b) => b.value - a.value);

        if (desc) {
            data.reverse();
        }

        const subset = data.filter(item => {
            if (focusShip && item.key === focusShip)
                return true;

            if (!item.value)
                return false;

            return softFilter(item);
        }).slice(0, 7);

        if (focusShip && !subset.find(dp => dp.key === focusShip)) {
            const focusShipData = data.find(dp => dp.key === focusShip);

            if (focusShipData) {
                subset.pop();
                subset.push(focusShipData);
            }
        }

        const max = Math.max(...subset.map(dp => dp.value));

        return [subset, max];
    }, [state, focusShip]);

    return <div style={{ width: chartWidth, height: CHART_HEIGHT }} className="helper-bar-chart">
        {state.status === "loading" && <LoadingComponent />}
        {state.status === "error" && <div>Something went wrong...</div>}
        {state.status === "success" &&
            <svg width={chartWidth} height={CHART_HEIGHT} viewBox={`0 0 ${chartWidth} ${CHART_HEIGHT}`}>
                <defs>
                    <filter id="light-shadow">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00D1FF" />
                    </filter>
                    <filter id="dark-shadow">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FF2055" />
                    </filter>
                </defs>
                {effectiveData.map((dp, i) => {
                    const color = dp.lightSide ? "#00D1FF" : "#FF2055";

                    return <g key={dp.key} fill="white" transform={`translate(10 ${60 + i*40})`}>
                        <text x={0} y={30} fill={focusShip === dp.key ? color : "white"}>{dp.key}</text>
                        <rect x={LEGEND_WIDTH} y={12} width={barsWidth - 10} height={24} fill="transparent" stroke="#31404d" strokeWidth={1} rx={4} />
                        <rect x={LEGEND_WIDTH} y={12} width={(barsWidth - 10) * dp.value / max} height={24} fill={focusShip === dp.key ? color : "transparent"} stroke={color} strokeWidth={2} rx={4} style={{filter: dp.lightSide ? "url(#light-shadow)" : "url(#dark-shadow)"}} />
                        <text x={chartWidth - 15} y={30} textAnchor="end" fill={"#CCD8E2"} fontSize="0.8em">{dp.formattedValue}</text>
                    </g>;
                })}
            </svg>
        }
    </div>;
};
