import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import NavBar from "@/Components/layout/NavBar";
import Footer from "@/Components/layout/Footer";

import BannerProvinsi from "@/Pages/ProfilDaerah/Partials/BannerProvinsi";
import LeftColumn from "@/Pages/ProfilDaerah/Partials/LeftColumn";
import Ekonomi from "@/Pages/ProfilDaerah/Partials/Ekonomi";
import Statistik from "@/Pages/ProfilDaerah/Partials/Statistik";
import PeluangInvestasi from "@/Pages/ProfilDaerah/Partials/PeluangInvestasi";

const ProfilDaerah = () => {
    const { provinsi } = usePage().props;

    const formatNumber = (number) => {
        if (number === undefined || number === null) {
            return "N/A";
        }
        return number.toLocaleString("id-ID");
    };

    const getInitialTab = () => {
        const savedTab = localStorage.getItem("activeTab");
        return savedTab ? savedTab : "Ekonomi";
    };

    const [activeTab, setActiveTab] = useState(getInitialTab);

    useEffect(() => {
        localStorage.setItem("activeTab", activeTab);
    }, [activeTab]);

    return (
        <>
            <NavBar />
            <BannerProvinsi />
            <div className="p-4 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                    {/* Left Column - Profil Daerah */}
                    <LeftColumn
                        formatNumber={formatNumber}
                        provinsi={provinsi}
                    />

                    {/* Right Column - Tabs for Ekonomi, Statistik, Peluang Investasi Prioritas */}
                    <div className="col-span-2 bg-white px-4 md:px-8 py-4 shadow-lg rounded-lg border-2 border-slate-100">
                        {/* Tab Buttons */}
                        <div className="flex border-b-2 border-gray-200 overflow-x-auto">
                            <button
                                className={`px-4 py-2 font-semibold text-sm md:text-base relative whitespace-nowrap ${
                                    activeTab === "Ekonomi"
                                        ? "text-[#384AA0]"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setActiveTab("Ekonomi")}
                            >
                                Ekonomi
                                {activeTab === "Ekonomi" && (
                                    <span className="absolute left-0 right-0 bottom-[-1px] h-1 bg-[#384AA0] rounded-t-full"></span>
                                )}
                            </button>
                            <button
                                className={`px-4 py-2 font-semibold text-sm md:text-base relative whitespace-nowrap ${
                                    activeTab === "Statistik"
                                        ? "text-[#384AA0]"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setActiveTab("Statistik")}
                            >
                                Statistik
                                {activeTab === "Statistik" && (
                                    <span className="absolute left-0 right-0 bottom-[-1px] h-1 bg-[#384AA0] rounded-t-full"></span>
                                )}
                            </button>
                            <button
                                className={`px-4 py-2 font-semibold text-sm md:text-base relative whitespace-nowrap ${
                                    activeTab === "Peluang"
                                        ? "text-[#384AA0]"
                                        : "text-gray-500"
                                }`}
                                onClick={() => setActiveTab("Peluang")}
                            >
                                Peluang Investasi Prioritas
                                {activeTab === "Peluang" && (
                                    <span className="absolute left-0 right-0 bottom-[-1px] h-1 bg-[#384AA0] rounded-t-full"></span>
                                )}
                            </button>
                        </div>

                        {/* Conditionally Rendered Content */}
                        <div className="mt-4">
                            {activeTab === "Ekonomi" && (
                                <Ekonomi
                                    provinsi={provinsi}
                                    formatNumber={formatNumber}
                                />
                            )}

                            {activeTab === "Statistik" && <Statistik />}

                            {activeTab === "Peluang" && <PeluangInvestasi />}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProfilDaerah;
