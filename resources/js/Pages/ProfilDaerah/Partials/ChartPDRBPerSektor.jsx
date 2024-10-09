import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { usePage } from "@inertiajs/react";
import { FileX } from "lucide-react";
import LegendComponent from "@/Pages/ProfilDaerah/Partials/LegendComponent";
import CustomTooltip from "@/Pages/ProfilDaerah/Partials/CustomTooltip";

const ChartPDRBPerSektor = () => {
    const { props } = usePage();
    const { provinsi } = props;
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    const data = provinsi?.pdrb_per_sektor || [];

    const sortedData = [...data].sort(
        (a, b) => b.nilai_pdrb_per_sektor - a.nilai_pdrb_per_sektor
    );

    const top5 = sortedData.slice(0, 5);
    const othersValue = sortedData
        .slice(5)
        .reduce((sum, item) => sum + parseFloat(item.nilai_pdrb_per_sektor), 0);

    const totalPDRB =
        top5.reduce(
            (sum, item) => sum + parseFloat(item.nilai_pdrb_per_sektor),
            0
        ) + othersValue;

    const chartData = {
        labels: [
            ...top5.map(
                (item) =>
                    `${item.sektor} (${(
                        (item.nilai_pdrb_per_sektor / totalPDRB) *
                        100
                    ).toFixed(2)}%)`
            ),
            `Lainnya (${((othersValue / totalPDRB) * 100).toFixed(2)}%)`,
        ],
        datasets: [
            {
                label: "Nilai PDRB per Sektor",
                data: [
                    ...top5.map((item) => item.nilai_pdrb_per_sektor),
                    othersValue,
                ],
                backgroundColor: [
                    "#0043A6",
                    "#C80039",
                    "#00A65D",
                    "#FFBF00",
                    "#B582A3",
                    "#B3B3B3",
                ],
                hoverOffset: 8,
                hoverScale: 8,
            },
        ],
    };

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
        }

        chartInstanceRef.current = new Chart(ctx, {
            type: "doughnut",
            data: chartData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: "55%",
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,

                        // Menyesuaikan posisi tooltip

                        // Menambah padding untuk tooltip
                        callbacks: {
                            label: function (tooltipItem) {
                                const label =
                                    chartData.labels[tooltipItem.dataIndex];
                                const value = tooltipItem.raw;
                                const percentage = (
                                    (value / totalPDRB) *
                                    100
                                ).toFixed(2);

                                return [
                                    `${label}: ${percentage}%`,
                                    `${value.toLocaleString()}`,
                                ];
                            },
                            title: function (tooltipItems) {
                                return "";
                            },
                        },
                        // Menyesuaikan alignment tooltip
                        xAlign: "center",
                        yAlign: "top",
                    },
                },
            },
        });

        return () => {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
        };
    }, [chartData]);

    if (data.length === 0) {
        return <div>Data PDRB per Sektor tidak tersedia.</div>;
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-6xl mx-auto mt-8 border-2 border-[#DFE3F6]">
            <div className="text-left pb-4">
                <h3 className="text-xl font-bold">
                    Kontribusi 5 Sektor Unggulan Regional terhadap PDRB
                </h3>
                <p className="text-sm text-gray-500">Sumber: BPS (2024)</p>
            </div>

            <div className="flex items-center justify-center">
                <div className="w-[380px] h-[400px] flex flex-col justify-center items-center pr-10">
                    <canvas className="w-[380px]" ref={chartRef}></canvas>
                </div>

                {/* Legend di luar chart */}
                <LegendComponent
                    chartData={chartData}
                    className="flex flex-col justify-center items-center"
                />
            </div>
        </div>
    );
};

export default ChartPDRBPerSektor;
