import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

const ChartComponent = () => {
    const data = {
        labels: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026],
        datasets: [
            {
                label: "Pertumbuhan PDB",
                data: [500, 1500, 1000, 1200, 1700, 1800, 1900, 2000],
                borderColor: function (context) {
                    const index = context.dataIndex;
                    const year = context.chart.data.labels[index];
                    return year <= 2023 ? "#FF0000" : "#1E90FF"; // Warna merah sebelum 2023, biru sesudahnya
                },
                borderWidth: 3,
                pointBackgroundColor: "#fff",
                pointBorderWidth: 2,
                pointRadius: 5,
                segment: {
                    borderColor: (ctx) =>
                        ctx.p0DataIndex < 4 ? "#FF0000" : "#1E90FF", // Segmen sebelum 2023 merah, setelah 2023 biru
                },
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                ticks: { font: { size: 12 } },
            },
            y: {
                ticks: { font: { size: 12 } },
            },
        },
        plugins: {
            tooltip: {
                backgroundColor: "#f5f5f5",
                borderColor: "#ccc",
                borderWidth: 1,
                titleFont: { weight: "bold" },
            },
            legend: {
                display: true,
                position: "top",
            },
        },
    };

    return (
        <div className="w-1/2 p-4 bg-white rounded-lg shadow-md">
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartComponent;
