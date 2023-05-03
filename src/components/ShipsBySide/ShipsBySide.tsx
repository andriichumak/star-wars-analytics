import React from "react";
import { LoadingComponent } from "@gooddata/sdk-ui";
import { ShipsContext } from "../../hooks/shipsList";

function circleXY(r: number, theta: number) {
    // Convert angle to radians
    theta = (theta-90) * Math.PI/180;

    return {
        x: Math.round(r*Math.cos(theta) * 10) / 10,
        y: Math.round(r*Math.sin(theta) * 10) / 10,
    }
}

type ArcDef = {
    start: {x: number, y: number},
    end: {x: number, y: number},
    isLarge: boolean,
    num: number,
};

// Magic numbers
const CANVAS_HEIGHT = 250;
const STROKE_WIDTH = 2;
const SHADOW_OFFSET = 4; // Leave offset to prevent cutting the shadow
const PIE_RADIUS = CANVAS_HEIGHT / 2 - STROKE_WIDTH - SHADOW_OFFSET;
const OFFSET = 90; // degrees, the start of the chart is at the bottom right corner

export const ShipsBySide = () => {
    const {ships, status} = React.useContext(ShipsContext);

    const {d, l} = React.useMemo<{d: ArcDef, l: ArcDef} | {d: null, l: null}>(() => {
        if (!ships)
            return {d: null, l: null};

        const darkSideNum = ships.map(ship => ship.servesTo === "Dark side" ? 1 as number : 0 as number).reduce((acc, item) => acc + item, 0);

        const darkSideArc = darkSideNum / ships.length * 360;
        const lightSideArc = 360 - darkSideArc;

        const d = {
            start: circleXY(PIE_RADIUS, OFFSET),
            end: circleXY(PIE_RADIUS, OFFSET + darkSideArc),
            isLarge: darkSideArc > 180,
            num: darkSideNum,
        };

        const l = {
            start: circleXY(PIE_RADIUS, OFFSET + darkSideArc + 3),
            end: circleXY(PIE_RADIUS, OFFSET + darkSideArc + lightSideArc - 3),
            isLarge: lightSideArc > 180,
            num: ships.length - darkSideNum,
        };

        return {l, d};
    }, [status, ships]);

    if (status === "loading" || !d || !l)
        return <LoadingComponent />

    if (status === "error")
        return <div>Coud not load the ships list.</div>

    return <div className="pie-chart">
        <div className="pie-chart__light-side"><span className="text_light_side">Light side</span> used {l.num} unique types of ships</div>
        <div className="pie-chart__chart">
            <svg width={CANVAS_HEIGHT} height={CANVAS_HEIGHT} viewBox={`0 0 ${CANVAS_HEIGHT} ${CANVAS_HEIGHT}`}>
                <defs>
                    <filter id="light-shadow">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#00D1FF" />
                    </filter>
                    <filter id="dark-shadow">
                        <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#FF2055" />
                    </filter>
                </defs>
                <g transform={`translate(${CANVAS_HEIGHT / 2} ${CANVAS_HEIGHT / 2})`}>
                    {/* Dark side */}
                    <path d={`M0 0L${d.start.x} ${d.start.y}A${PIE_RADIUS} ${PIE_RADIUS} 0 ${d.isLarge ? "1" : "0"} 1 ${d.end.x} ${d.end.y}Z`} strokeWidth={STROKE_WIDTH} stroke="#FF2055" fill="transparent" style={{filter: "url(#dark-shadow)"}} />

                    {/* Light side */}
                    <path d={`M${l.start.x} ${l.start.y}A${PIE_RADIUS} ${PIE_RADIUS} 0 ${l.isLarge ? "1" : "0"} 1 ${l.end.x} ${l.end.y}`} strokeWidth={STROKE_WIDTH} stroke="#00D1FF" fill="transparent" style={{filter: "url(#light-shadow)"}}/>
                </g>
            </svg>
        </div>
        <div className="pie-chart__dark-side"><span>While the <span className="text_dark_side">dark side</span> has shown us only {d.num}</span></div>
    </div>;
};
