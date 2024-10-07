import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import NavBar from "@/Components/layout/NavBar";
import Footer from "@/Components/layout/Footer";
import BannerProvinsi from "@/Components/BannerProvinsi";

const ProfilDaerah = () => {
    const { provinsi } = usePage().props;

    // State to manage the active tab
    const [activeTab, setActiveTab] = useState("Ekonomi");

    // Function to format large numbers with commas, and handle undefined/null cases
    const formatNumber = (number) => {
        if (number === undefined || number === null) {
            return "N/A"; // Return a default value when the number is undefined or null
        }
        return number.toLocaleString("id-ID");
    };

    return (
        <>
            <NavBar />
            <BannerProvinsi />
            <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-w-full">
                    {/* Left Column - Profil Daerah */}
                    <div className="col-span-1 bg-white p-4 shadow-lg rounded-lg">
                        <h1 className="text-2xl font-bold text-[#384AA0]">
                            Profil Daerah
                        </h1>
                        <div className="flex gap-4">
                            <div className="mt-4 text-[#86858D] gap-2 flex flex-col">
                                <p>Luas Wilayah: </p>
                                <p>Jumlah Kabupaten/Kota: </p>{" "}
                                {/* Handle undefined values */}
                                <p>Jumlah Penduduk: </p>
                                <p>Jumlah Kawasan Industri: </p>
                            </div>
                            <div className="mt-4 gap-2 flex flex-col">
                                <p>{formatNumber(provinsi.luas_area)} km²</p>
                                <p>
                                    {provinsi.jumlah_kabupaten_kota || "N/A"}
                                </p>{" "}
                                {/* Handle undefined values */}
                                <p>{formatNumber(provinsi.populasi)} jiwa</p>
                                <p className="text-[#384AA0]">
                                    {provinsi.kawasan_industri?.length || "N/A"}{" "}
                                    Kawasan
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 bg-gray-100 p-4 rounded">
                            <h2 className="text-lg font-semibold">
                                Kawasan Ekonomi Khusus (KEK)
                            </h2>
                            <img
                                src="/path-to-kek-image.jpg"
                                alt="KEK"
                                className="w-full h-auto mt-2 rounded"
                            />
                            <p>
                                <strong>Nama KEK:</strong> KEK Sei Mangkei
                            </p>
                            <p>
                                <strong>Luas:</strong> 498 ha
                            </p>
                            <p>
                                <strong>Target Investasi:</strong> Rp104 triliun
                            </p>
                            <p>
                                <strong>Target Pengunjung:</strong> 99,853 jiwa
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Tabs for Ekonomi, Statistik, Peluang Investasi Prioritas */}
                    <div className="col-span-2 bg-white p-4 shadow-lg rounded-lg">
                        {/* Tab Buttons */}
                        <div className="flex border-b">
                            <button
                                className={`px-4 py-2 ${
                                    activeTab === "Ekonomi"
                                        ? "border-b-4 border-[#384AA0] text-[#384AA0]"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setActiveTab("Ekonomi")}
                            >
                                Ekonomi
                            </button>
                            <button
                                className={`px-4 py-2 ${
                                    activeTab === "Statistik"
                                        ? "border-b-4 border-[#384AA0] text-[#384AA0]"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setActiveTab("Statistik")}
                            >
                                Statistik
                            </button>
                            <button
                                className={`px-4 py-2 ${
                                    activeTab === "Peluang"
                                        ? "border-b-4 border-[#384AA0] text-[#384AA0]"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setActiveTab("Peluang")}
                            >
                                Peluang Investasi Prioritas
                            </button>
                        </div>

                        {/* Conditionally Rendered Content */}
                        {activeTab === "Ekonomi" && (
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                <div className="mb-6">
                                    <h2 className="text-xl font-bold">
                                        Ekonomi
                                    </h2>
                                    <p>
                                        <strong>PDRB:</strong> Rp
                                        {formatNumber(
                                            provinsi.pdrb
                                                ? provinsi.pdrb[0]
                                                      ?.nilai_pdrb_berlaku
                                                : 0
                                        )}
                                    </p>
                                    <p>
                                        <strong>Pendapatan Daerah:</strong> Rp
                                        {formatNumber(
                                            provinsi.pendapatan_daerah
                                        )}
                                    </p>
                                    <p>
                                        <strong>
                                            Upah Minimum Regional (UMR):
                                        </strong>{" "}
                                        Rp
                                        {formatNumber(
                                            provinsi.upah_minimum_provinsi
                                        )}
                                    </p>
                                    <p>
                                        <strong>
                                            Profil Investasi Regional:
                                        </strong>{" "}
                                        <a
                                            href="https://regionalinvestment.bkpm.go.id/pir/daerah/?id=12"
                                            className="text-blue-600"
                                        >
                                            Lihat Detail
                                        </a>
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h2 className="text-xl font-bold">
                                        Realisasi Penanaman Modal
                                    </h2>
                                    <p>
                                        <strong>
                                            Penanaman Modal Luar Negeri:
                                        </strong>{" "}
                                        Rp
                                        {formatNumber(
                                            provinsi.penanaman_modal_luar_negeri
                                        )}
                                    </p>
                                    <p>
                                        <strong>
                                            Penanaman Modal Dalam Negeri:
                                        </strong>{" "}
                                        Rp
                                        {formatNumber(
                                            provinsi.penanaman_modal_dalam_negeri
                                        )}
                                    </p>
                                    <p>
                                        <strong>Penanaman Modal Asing:</strong>{" "}
                                        Rp
                                        {formatNumber(
                                            provinsi.penanaman_modal_asing
                                        )}
                                    </p>
                                </div>
                                <div className="mb-6 col-span-2">
                                    <h2 className="text-xl font-bold">
                                        Nilai Perdagangan Luar Negeri
                                    </h2>
                                    <p>
                                        <strong>Nilai Ekspor:</strong> Rp
                                        {formatNumber(provinsi.nilai_ekspor)}
                                    </p>
                                    <p>
                                        <strong>Nilai Impor:</strong> Rp
                                        {formatNumber(provinsi.nilai_impor)}
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === "Statistik" && (
                            <div className="mt-4">
                                <h2 className="text-xl font-bold">Statistik</h2>
                                {/* Add your Statistik content here */}
                                <p>Statistik content will go here...</p>
                            </div>
                        )}

                        {activeTab === "Peluang" && (
                            <div className="mt-4">
                                <h2 className="text-xl font-bold">
                                    Peluang Investasi Prioritas
                                </h2>
                                {/* Add your Peluang Investasi content here */}
                                <p>
                                    Peluang Investasi Prioritas content goes
                                    here...
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProfilDaerah;
