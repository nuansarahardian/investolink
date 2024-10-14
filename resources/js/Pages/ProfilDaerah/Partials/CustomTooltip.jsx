import React from "react";
const CustomTooltip = ({ tooltipData }) => {
    if (!tooltipData) return null;

    return (
        <div
            className="chart-tooltip"
            style={{
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                color: "white",
                padding: "10px",
                borderRadius: "4px",
                pointerEvents: "none",
                maxWidth: "300px",
            }}
        >
            {tooltipData.map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </div>
    );
};

export default CustomTooltip;
