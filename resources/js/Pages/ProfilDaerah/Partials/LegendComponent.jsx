import React from "react";

const LegendComponent = ({ chartData }) => {
    return (
        <div className="chart-legend">
            {chartData.labels.map((label, index) => (
                <div key={index} className="chart-legend-item">
                    <span
                        style={{
                            display: "inline-block",
                            width: "12px",
                            height: "12px",
                            backgroundColor:
                                chartData.datasets[0].backgroundColor[index],
                            marginRight: "10px",
                            borderRadius: "4px", // Membuat kotak sedikit rounded
                        }}
                    ></span>
                    {label}
                </div>
            ))}
        </div>
    );
};

export default LegendComponent;
