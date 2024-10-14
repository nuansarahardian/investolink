import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto"; // Menggunakan Chart dari chart.js/auto
import annotationPlugin from "chartjs-plugin-annotation"; // Import plugin annotation

Chart.register(annotationPlugin); // Daftarkan plugin annotation

const ChartPDB = () => {
    const data = {
        labels: [2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028],
        datasets: [
            {
                label: "Pertumbuhan PDB Sebelumnya",
                data: [
                    5.062,
                    2.965,
                    -0.687,
                    5.0245,
                    5.044,
                    5.115,
                    null,
                    null,
                    null,
                    null,
                ],
                borderColor: "#F7F6F8",
                borderWidth: 2,
                fill: false, // Tidak mengisi area sebelum tahun 2024
                pointBackgroundColor: function (context) {
                    const index = context.dataIndex;
                    const year = context.chart.data.labels[index];
                    return year === 2024
                        ? "#384AA0"
                        : year < 2024
                        ? "#B50000"
                        : "#DF7B7B";
                },
                pointBorderWidth: 2,
                pointRadius: function (context) {
                    const index = context.dataIndex;
                    const year = context.chart.data.labels[index];
                    return year === 2024 ? 7 : 5; // Ukuran lingkaran di tahun 2024 menjadi lebih kecil
                },
                segment: {
                    borderColor: (ctx) =>
                        ctx.p0DataIndex < 5 ? "#DF7B7B" : "#5E7ADD",
                },
            },
            {
                label: "Ramalan Pertumbuhan PDB",
                data: [
                    null,
                    null,
                    null,
                    null,
                    null,
                    5.115,
                    5.231,
                    5.396,
                    5.607,
                    5.866,
                ],
                borderColor: "#384AA0",
                borderWidth: 2,
                fill: "start", // Mengisi area mulai dari tahun 2024
                backgroundColor: "rgba(56, 74, 160, 0.1)", // Warna biru yang lebih pekat
                pointBackgroundColor: "#384AA0",
                pointBorderWidth: 2,
                pointRadius: 5,
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
            annotation: {
                annotations: {
                    // Garis horizontal di angka 0
                    horizontalLine: {
                        type: "line",
                        yMin: 0,
                        yMax: 0,
                        borderColor: "black",
                        borderWidth: 1,
                        borderDash: [6, 6],
                    },
                    // Garis vertikal di tahun 2024
                    verticalLine: {
                        type: "line",
                        xMin: 2024,
                        xMax: 2024,
                        borderColor: "#FF0000",
                        borderWidth: 1,
                        borderDash: [6, 6],
                        label: {
                            content: "Tahun 2024",
                            enabled: true,
                            position: "top",
                            color: "#FF0000",
                        },
                    },
                },
            },
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
                    boxWidth: 7,
                    boxHeight: 7,
                    padding: 20,
                    generateLabels: function (chart) {
                        return [
                            {
                                text: "Pertumbuhan PDB Sebelumnya",
                                fillStyle: "#B50000",
                                strokeStyle: "#B50000",
                                pointStyle: "circle",
                            },
                            {
                                text: "Ramalan Pertumbuhan PDB",
                                fillStyle: "#384AA0",
                                strokeStyle: "#384AA0",
                                pointStyle: "circle",
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
                <p className="text-black font-bold">Pertumbuhan PDB</p>
                <p className="text-[#86858D] text-[14px]">Sumber: BPS (2024)</p>
            </div>
            <Line data={data} options={options} />
        </div>
    );
};

export default ChartPDB;
