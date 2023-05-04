import React from "react";
import { usePageWidth } from "../../hooks/pageWidth";

export const Footer: React.FC = () => {
    // 79 = magic number - all paddings combined
    const pageWidth = Math.min(usePageWidth() - 79, 1280);
    const cutStart = Math.round(pageWidth * 0.42);
    const cutEnd = Math.round(pageWidth * 0.58);

    return <svg width={pageWidth} height="24" viewBox={`0 0 ${pageWidth} 24`} fill="none" style={{display: "block"}}>
        <path d={`M0.5 0.5L23.5 23.5H${cutStart}L${cutStart+22} 0H${cutEnd-22}L${cutEnd} 23.5H${pageWidth - 22}L${pageWidth - 0.5} 0.5`} stroke="#31404d"/>
    </svg>
};
