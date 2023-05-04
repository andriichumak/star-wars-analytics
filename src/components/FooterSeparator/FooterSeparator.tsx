import React from "react";
import {usePageWidth} from "../../hooks/pageWidth";

export const FooterSeparator: React.FC = () => {
    // 79 = magic number - all paddings combined
    const pageWidth = Math.min(usePageWidth() - 79, 1280);
    const cutStart = Math.round(pageWidth * 0.42);
    const cutEnd = Math.round(pageWidth * 0.58);

    return <svg width={pageWidth} height="24" viewBox={`0 0 ${pageWidth} 24`} fill="none" style={{display: "block"}}>
        <path d={`M0 1.5H${cutStart}L${cutStart + 22} 22H${cutEnd - 22}L${cutEnd} 1.5H${pageWidth}`} stroke="#F5F8FA" stroke-width="3"/>
        <path d="M0 1.5V24" stroke-width="2" stroke="#31404d"/>
        <path d={`M${pageWidth} 1.5V24`} stroke-width="2" stroke="#31404d"/>
    </svg>;
};
