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

const ChartPDB = () => {
    const data = {
        labels: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028],
        datasets: [
            {
                label: "Pertumbuhan PDB Sebelumnya",
                data: [
                    5.062, 2.965, -0.687, 5.0245, 5.044, 5.115, 5.231, 5.396,
                    5.607, 5.866,
                ],
                borderColor: "#F7F6F8",
                borderWidth: 2,
                pointBackgroundColor: function (context) {
                    const index = context.dataIndex;
                    const year = context.chart.data.labels[index];
                    return year <= 2024 ? "#B50000" : "#384AA0"; // Merah sampai 2024, biru setelahnya
                },
                pointBorderWidth: 2,
                pointRadius: 5,
                segment: {
                    borderColor: (ctx) =>
                        ctx.p0DataIndex < 5 ? "#B50000" : "#5E7ADD", // Warna merah untuk garis hingga 2024
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
                titleFont: { weight: "bold", size: 14 },
                bodyFont: { size: 12 },
                titleColor: "#000",
                bodyColor: "#000",
                callbacks: {
                    title: (tooltipItems) => {
                        const year = tooltipItems[0].label;
                        return `Tahun: ${year}`;
                    },
                    label: (tooltipItem) => {
                        return `Pertumbuhan PDB: ${tooltipItem.raw}%`;
                    },
                },
            },
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    boxWidth: 7, // Ukuran kotak kecil
                    boxHeight: 7, // Ukuran tinggi kotak kecil
                    padding: 20, // Menambahkan jarak antara elemen legend
                    generateLabels: function (chart) {
                        return [
                            {
                                text: "Pertumbuhan PDB Sebelumnya",
                                fillStyle: "#B50000", // Warna merah
                                strokeStyle: "#B50000",
                                pointStyle: "circle", // Kotak kecil
                            },
                            {
                                text: "Ramalan Pertumbuhan PDB",
                                fillStyle: "#384AA0", // Warna biru
                                strokeStyle: "#384AA0",
                                pointStyle: "circle", // Kotak kecil
                            },
                        ];
                    },
                },
            },
        },
    };

    return (
        <div className="w-full p-6 bg-white rounded-2xl border-2 border-[#DFE3F6] mt-4">
            <div className="mb-4">
                <p className="text-black font-bold">Pertumbuhan PDB </p>
                <p className="text-[#86858D] text-[14px]">Sumber: BPS(2024)</p>
            </div>
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartPDB;
