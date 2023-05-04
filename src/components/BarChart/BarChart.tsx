import { IAttribute, IFilter, IMeasure } from "@gooddata/sdk-model";
import React from "react";
import { LoadingComponent, useBackend, useWorkspace, DataViewFacade } from "@gooddata/sdk-ui";
import * as cat from "../../catalog";
import { focusShipContext } from "../../hooks/focusShip";
import {usePageWidth} from "../../hooks/pageWidth";
import { HelperBarChart, HelperBarChartProps } from "../HelperBarChart";

type BarChartProps = {
    metric: IMeasure,
    viewBy: IAttribute,
    filters?: IFilter[],
    colorCode?: boolean,
    softFilter?: (item: BarChartDataPoint) => boolean,
    desc?: boolean,
};

type BarChartDataPoint = {
    value: number,
    formattedValue: string,
    key: string,
    lightSide: boolean,
};

type BarChartState = {
    status: "loading" | "success" | "error",
    data: BarChartDataPoint[] | null,
};

// Magic numbers...
const CHART_HEIGHT = 400;
const LEGEND_WIDTH = 280;
const LABELS_WIDTH = 120;

export const BarChart: React.FC<BarChartProps> = ({metric, viewBy, filters = [], colorCode = true, softFilter = () => true, desc = false}) => {
    const [state, setState] = React.useState<BarChartState>({status: "loading", data: null});
    const backend = useBackend();
    const workspace = useWorkspace();
    const focusShip = React.useContext(focusShipContext);
    const pageWidth = usePageWidth();
    const chartWidth = pageWidth >= 1100
        ? Math.min(Math.max(pageWidth - 150, 350), 1280 - 79)
        : pageWidth - 100;
    const barsWidth = chartWidth - LEGEND_WIDTH - LABELS_WIDTH;

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

    return <div style={{ width: chartWidth, height: CHART_HEIGHT }}>
        {state.status === "loading" && <LoadingComponent />}
        {state.status === "error" && <div>Something went wrong...</div>}
        {state.status === "success" &&
            <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${CHART_HEIGHT}`}>
                <defs>
                    <filter id="light-shadow">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00D1FF" />
                    </filter>
                    <filter id="dark-shadow">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FF2055" />
                    </filter>
                </defs>
                {Array.from({length: 6}).map((_, i) => {
                    return <g key={i} fill="white" stroke="#31404d" transform={`translate(${LEGEND_WIDTH + 10 + i*(barsWidth - 10)/5} 0)`}>
                        <line x1={0} y1={60} x2={0} y2={CHART_HEIGHT - 50} />
                        <text x={-8} y={CHART_HEIGHT - 30}>{Math.round((max / 5) * i)}</text>
                    </g>;
                })}
                {effectiveData.map((dp, i) => {
                    const color = dp.lightSide ? "#00D1FF" : "#FF2055";

                    return <g key={dp.key} fill="white" transform={`translate(10 ${60 + i*40})`}>
                        <text x={0} y={30} fill={focusShip === dp.key ? color : "white"}>{dp.key}</text>
                        <rect x={LEGEND_WIDTH} y={12} width={(barsWidth - 10) * dp.value / max} height={24} fill={focusShip === dp.key ? color : "transparent"} stroke={color} strokeWidth={2} rx={4} style={{filter: dp.lightSide ? "url(#light-shadow)" : "url(#dark-shadow)"}} />
                        <text x={LEGEND_WIDTH + barsWidth * dp.value / max + 10} y={30} fill={color}>{dp.formattedValue}</text>
                    </g>;
                })}
            </svg>
        }
    </div>;
};

export const BarChartAutoSelect: React.FC<BarChartProps & HelperBarChartProps> = (props) => {
    const pageWidth = usePageWidth();

    if (pageWidth <= 1100) {
        return <HelperBarChart {...props} />;
    }

    return <BarChart {...props} />;
};
