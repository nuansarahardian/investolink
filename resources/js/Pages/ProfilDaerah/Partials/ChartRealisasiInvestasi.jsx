import React from "react";

import { Line } from "react-chartjs-2"; // Menggunakan Line chart untuk data historis
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement, // Tambahkan untuk menampilkan bar chart
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { usePage } from "@inertiajs/react"; // Import usePage dari Inertia.js

// Meregistrasi semua komponen Chart.js yang dibutuhkan
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement, // Tambahkan BarElement untuk mendukung bar chart
    Title,
    Tooltip,
    Legend
);

const ChartRealisasiInvestasi = () => {
    // Mengambil data dari Inertia melalui usePage
    const { props } = usePage();
    const { provinsi } = props; // Ekstrak data provinsi dari props

    // Memetakan data yang didapatkan dari backend ke dalam format chart
    const labels = provinsi.realisasi_investasi.map((item) => item.tahun); // Ambil tahun-tahun untuk sumbu X
    const realisasiInvestasiData = provinsi.realisasi_investasi.map(
        (item) => item.nilai_realisasi_investasi
    ); // Ambil nilai realisasi investasi
    const pmaData = provinsi.pma
        .slice() // Buat salinan array agar tidak memodifikasi array asli
        .reverse() // Membalik urutan array
        .map((item) => item.nilai_pma); // Ambil nilai PMA setelah dibalik urutannya

    const pmdnData = provinsi.pmdn
        .slice() // Buat salinan array agar tidak memodifikasi array asli
        .reverse() // Membalik urutan array
        .map((item) => item.nilai_pmdn); // Ambil nilai PMDN setelah dibalik urutannya

    // Membuat data untuk chart
    const data = {
        labels: labels, // Tahun sebagai label di sumbu X
        datasets: [
            {
                label: `Realisasi Investasi (Triliun Rp)`, // Label dataset untuk Realisasi Investasi
                data: realisasiInvestasiData, // Data Realisasi Investasi
                backgroundColor: "#DF7B7B",
                borderColor: "#DF7B7B",
                borderWidth: 2,
                pointBackgroundColor: "#B50000",
                pointBorderColor: "#B50000",
                fill: false,
                tension: 0,
                type: "line", // Garis untuk realisasi investasi
                yAxisID: "y", // Sumbu y untuk Realisasi Investasi
            },
            {
                label: `PMA (Triliun Rp)`, // Label dataset untuk PMA
                data: pmaData, // Data PMA
                backgroundColor: "rgba(153, 102, 255, 0.6)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1,
                type: "bar", // Batang untuk PMA
                yAxisID: "y1", // Sumbu y untuk PMA dan PMDN
            },
            {
                label: `PMDN (Triliun Rp)`, // Label dataset untuk PMDN
                data: pmdnData, // Data PMDN
                backgroundColor: "rgba(54, 162, 235, 0.6)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
                type: "bar", // Batang untuk PMDN
                yAxisID: "y1", // Sumbu y untuk PMA dan PMDN
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                position: "left", // Menampilkan realisasi investasi di sebelah kiri
                title: {
                    display: true,
                    text: "Realisasi Investasi (Triliun Rp)",
                },
                suggestedMin: 0, // Mulai dari 0
                suggestedMax: Math.max(
                    ...realisasiInvestasiData,
                    ...pmaData,
                    ...pmdnData
                ), // Maksimal dari seluruh data
            },
            y1: {
                beginAtZero: true,
                position: "right", // Menampilkan PMA dan PMDN di sebelah kanan
                grid: {
                    drawOnChartArea: false, // Menghapus garis dari y1 pada area chart
                },
                title: {
                    display: true,
                    text: "PMA & PMDN (Triliun Rp)",
                },
                suggestedMin: 0, // Mulai dari 0
                suggestedMax: Math.max(
                    ...realisasiInvestasiData,
                    ...pmaData,
                    ...pmdnData
                ), // Maksimal dari seluruh data
            },
            x: {
                title: {
                    display: true,
                    text: "Tahun",
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: "bottom",
            },
        },
    };

    return (
        <div className="w-full p-6 bg-white rounded-[12px] border-2 border-[#DFE3F6] ">
            <div className="mb-4">
                <p className="text-black font-bold">
                    Realisasi Investasi, PMA, dan PMDN -{" "}
                    {provinsi.nama_provinsi}
                </p>
                <p className="text-[#86858D] text-[14px]">
                    Sumber: Data Investasi (Tahun {labels[0]} -{" "}
                    {labels[labels.length - 1]})
                </p>
            </div>
            <Line data={data} height={100} options={options} />{" "}
            {/* Menggunakan Line Chart untuk garis */}
        </div>
    );
};

export default ChartRealisasiInvestasi;
