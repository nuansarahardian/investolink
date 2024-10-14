import React from "react";
import { Line } from "react-chartjs-2"; // Menggunakan Line chart
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
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
    Title,
    Tooltip,
    Legend
);

const ChartPDRB = () => {
    // Mengambil data dari Inertia melalui usePage
    const { props } = usePage();
    const { provinsi } = props; // Ekstrak data provinsi dari props

    // Memetakan data PDRB yang didapatkan dari backend ke dalam format chart
    const labels = provinsi.pdrb.map((item) => item.tahun); // Ambil tahun-tahun
    const pdrbBerlakuData = provinsi.pdrb.map(
        (item) => item.nilai_pdrb_berlaku
    ); // Ambil nilai PDRB berlaku
    const pdrbKonstanData = provinsi.pdrb.map(
        (item) => item.nilai_pdrb_konstan
    ); // Ambil nilai PDRB konstan

    // Membuat data untuk chart
    const data = {
        labels: labels, // Tahun sebagai label di sumbu X
        datasets: [
            {
                label: `PDRB Berlaku untuk ${provinsi.nama_provinsi}`, // Label dataset untuk PDRB Berlaku
                data: pdrbBerlakuData, // Data PDRB berlaku

                borderColor: "#5E7ADD",
                borderWidth: 2,
                pointBackgroundColor: "#3853A4",
                pointBorderColor: "#3853A4",
                fill: false,
                tension: 0,
            },
            {
                label: `PDRB Konstan untuk ${provinsi.nama_provinsi}`, // Label dataset untuk PDRB Konstan
                data: pdrbKonstanData, // Data PDRB konstan

                borderColor: "#DF7B7B",
                borderWidth: 2,
                pointBackgroundColor: "#AD3535",
                pointBorderColor: "#AD3535",
                fill: false,
                tension: 0,
            },
        ],
    };

    // Opsi untuk chart
    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "PDRB (Rp)",
                },
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
        <div className="w-full p-6  bg-white rounded-2xl border-2 border-[#DFE3F6] mt-4">
            <div className="mb-4">
                <p className="text-black font-bold">
                    PDRB Berlaku dan Konstan - {provinsi.nama_provinsi}
                </p>
                <p className="text-[#86858D] text-[14px]">
                    Sumber: Data PDRB (Tahun {labels[0]} -{" "}
                    {labels[labels.length - 1]})
                </p>
            </div>
            <Line data={data} height={100} options={options} />{" "}
            {/* Menggunakan Line Chart */}
        </div>
    );
};

export default ChartPDRB;
