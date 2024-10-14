import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import { usePage } from "@inertiajs/react";

const ChartRealisasiInvestasi = () => {
    const { props } = usePage();
    const { dataNasional } = props;

    // Memetakan data yang didapatkan dari backend ke dalam format chart
    const labels = dataNasional.map((item) => item.tahun);

    // Memproses data dengan menghapus titik pemisah ribuan dan mengganti koma dengan titik untuk desimal
    const pmdnData = dataNasional.map((item) =>
        parseFloat(
            item.nilai_pmdn_nasional.replace(/\./g, "").replace(",", ".")
        )
    );
    const pmaData = dataNasional.map((item) =>
        parseFloat(item.nilai_pma_nasional.replace(/\./g, "").replace(",", "."))
    );
    const realisasiData = dataNasional.map((item) =>
        parseFloat(
            item.nilai_realisasi_investasi_nasional
                .replace(/\./g, "")
                .replace(",", ".")
        )
    );

    const data = {
        labels: labels,
        datasets: [
            {
                type: "line",
                label: "Data Historis Realisasi Investasi",
                data: realisasiData,
                borderColor: "#FFFFFF",
                fill: false,
                pointRadius: 5,
                borderWidth: 2,
                pointBackgroundColor: "#B50000",
                pointBorderWidth: 2,
                yAxisID: "y",
                tension: 0.0,
                spanGaps: true,
                segment: { borderColor: "#DF7B7B" },
            },
            {
                type: "bar",
                label: "Data Historis PMA",
                data: pmaData,
                backgroundColor: "#B82AA1",
                yAxisID: "y",
                borderRadius: 2,
            },
            {
                type: "bar",
                label: "Data Historis PMDN",
                data: pmdnData,
                backgroundColor: "#3B7BAC",
                yAxisID: "y",
                borderRadius: 2,
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
                    text: "Triliun (Rp)",
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
                    title: (tooltipItems) => `Tahun: ${tooltipItems[0].label}`,
                    label: (tooltipItem) =>
                        `Nilai: Rp${tooltipItem.raw} Triliun`,
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
                    generateLabels: (chart) => [
                        {
                            text: "Data Realisasi Investasi",
                            fillStyle: "#B50000",
                            strokeStyle: "#DF7B7B",
                            pointStyle: "rect",
                        },
                        {
                            text: "Data PMA",
                            fillStyle: "#B82AA1",
                            strokeStyle: "#B82AA1",
                            pointStyle: "rect",
                        },
                        {
                            text: "Data PMDN",
                            fillStyle: "#3B7BAC",
                            strokeStyle: "#3B7BAC",
                            pointStyle: "rect",
                        },
                    ],
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
                <p className="text-[#86858D] text-[14px]">Sumber: BPS (2024)</p>
            </div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ChartRealisasiInvestasi;
