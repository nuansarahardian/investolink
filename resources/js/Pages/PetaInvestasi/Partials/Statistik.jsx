import React from "react";
import ChartPDB from "@/Pages/PetaInvestasi/Partials/ChartPDB";
import ChartRealisasiInvestasi from "@/Pages/PetaInvestasi/Partials/ChartRealisasiInvestasi";

const Statistik = () => {
    return (
        <>
            <div className="w-[95%] bg-white shadow h-full m-auto mt-10 rounded-[12px]">
                <div className="p-[32px] text-[#3F3F3F]">
                    <div className="flex ">
                        <img
                            src="/icon/statistik.png"
                            className="w-[48px] h-[48px] mr-4"
                            alt=""
                        />

                        <div className="my-auto gap-1 flex flex-col">
                            <div className="font-bold text-xl text-[#2D3985]">
                                Statistik
                            </div>
                            <div className="text-sm text-[#86858D]">
                                Pantau data pertumbuhan PDRB dan realisasi
                                investasi nasional terbaru
                            </div>
                        </div>
                    </div>

                    {/* Memastikan grid berfungsi */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <ChartPDB />
                        </div>
                        <div className="col-span-1">
                            <ChartRealisasiInvestasi />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistik;
