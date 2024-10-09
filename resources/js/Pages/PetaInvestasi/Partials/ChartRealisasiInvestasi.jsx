import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Legend,
    Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { usePage } from "@inertiajs/react"; // Import usePage dari Inertia.js

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Legend,
    Tooltip
);

const ChartRealisasiInvestasi = () => {
    // Mengambil data dari Inertia melalui usePage
    const { props } = usePage();
    const { dataNasional } = props; // Ekstrak data yang dikirim oleh Laravel melalui props

    // Memetakan data yang didapatkan dari backend ke dalam format chart
    const labels = dataNasional.map((item) => item.tahun);
    const pmdnData = dataNasional.map((item) => item.nilai_pmdn_nasional);
    const pmaData = dataNasional.map((item) => item.nilai_pma_nasional);
    const realisasiData = dataNasional.map(
        (item) => item.nilai_realisasi_investasi_nasional
    );

    const data = {
        labels: labels,
        datasets: [
            {
                type: "line", // Dataset untuk garis (line chart)
                label: "Data Historis Realisasi Investasi",
                data: realisasiData, // Data dari backend
                borderColor: "#F7F6F8",
                fill: false,
                pointRadius: 5,
                borderWidth: 2,
                pointBackgroundColor: "#B50000",
                pointBorderWidth: 2,
                yAxisID: "y",
                tension: 0.0,
                spanGaps: true,
                segment: { borderColor: "#B50000" },
                pointBorderWidth: 2,
                tension: 0.0,
            },
            {
                type: "bar",
                label: "Data Historis PMA",
                data: pmaData, // Data dari backend
                backgroundColor: "#9E47FF",
                yAxisID: "y",
            },
            {
                type: "bar",
                label: "Data Historis PMDN",
                data: pmdnData, // Data dari backend
                backgroundColor: "#3853A4",
                yAxisID: "y",
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Miliar (Rp)",
                },
            },
            x: {
                title: {
                    display: true,
                },
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
                        return `Nilai: ${tooltipItem.raw}`;
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
                                text: "Data Historis Realisasi Investasi",
                                fillStyle: "#B50000",
                                strokeStyle: "#B50000",
                                pointStyle: "rect",
                            },
                            {
                                text: "Data Historis PMA",
                                fillStyle: "#9E47FF",
                                strokeStyle: "#9E47FF",
                                pointStyle: "rect",
                            },
                            {
                                text: "Data Historis PMDN",
                                fillStyle: "#3853A4",
                                strokeStyle: "#3853A4",
                                pointStyle: "rect",
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
                <p className="text-black font-bold">
                    Realisasi Investasi Nasional
                </p>
                <p className="text-[#86858D] text-[14px]">
                    Sumber: Lorem Ipsum (2024)
                </p>
            </div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ChartRealisasiInvestasi;
