import React from "react";
import { usePageWidth } from "../../hooks/pageWidth";

export const HeaderSeparator: React.FC = () => {
    // 79 = magic number - all paddings combined
    const pageWidth = Math.min(usePageWidth() - 79, 1280);
    const cutStart = Math.round(pageWidth * 0.4);
    const cutEnd = Math.round(pageWidth * 0.8);

    return <svg width={pageWidth} height="160" viewBox={`0 0 ${pageWidth} 160`} fill="none" style={{display: "block"}}>
        <path d={`M1.5 160V138H${cutStart}L${cutStart + 20} 158H${cutEnd - 20}L${cutEnd} 138H${pageWidth-1.5}V160`} stroke="#F5F8FA" stroke-width="3"/>
        <g transform={`translate(${cutStart + 15} 136)`} fill="#FF2055">
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 22 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 30 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 46 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 62 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 78 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 86 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 94 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 102 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 118 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 134 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 142 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 158 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 184 0)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 30 8)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 46 8)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 54 8)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 70 8)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 86 8)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 118 8)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 142 8)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 150 8)"/>
            <rect width="6" height="6" rx="1" transform="matrix(-1 0 0 1 174 8)"/>
        </g>
        <line x1={cutStart} y1="138" x2="750" y2="4" stroke="#F5F8FA" stroke-width="2"/>
        <circle cx="750" cy="4" r="4" fill="#F5F8FA"/>
    </svg>;
};
