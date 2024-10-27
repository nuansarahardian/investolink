import React from "react";
import ChartPDB from "@/Pages/PetaInvestasi/Partials/ChartPDB";
import ChartRealisasiInvestasi from "@/Pages/PetaInvestasi/Partials/ChartRealisasiInvestasi";

const Statistik = () => {
    return (
        <div className="w-[95%] bg-white shadow h-full m-auto mt-10 rounded-[12px] p-4 md:p-[32px]">
            <div className="text-[#3F3F3F]">
                <div className="flex flex-col md:flex-row items-start md:items-center">
                    <img
                        src="/icon/statistik.png"
                        className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] mr-0 md:mr-4 mb-4 md:mb-0"
                        alt="Statistik Icon"
                    />
                    <div className="flex flex-col gap-1">
                        <div className="font-bold text-lg md:text-xl text-[#2D3985]">
                            Statistik
                        </div>
                        <div className="text-sm md:text-base text-[#86858D]">
                            Pantau data pertumbuhan PDB dan Realisasi Investasi
                            Nasional
                        </div>
                    </div>
                </div>

                {/* Responsive grid for charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="col-span-1">
                        <ChartPDB />
                    </div>
                    <div className="col-span-1">
                        <ChartRealisasiInvestasi />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistik;
