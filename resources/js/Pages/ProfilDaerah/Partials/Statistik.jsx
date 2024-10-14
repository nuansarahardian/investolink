import React from "react";
import ChartPDRB from "@/Pages/ProfilDaerah/Partials/ChartPDRB";
import ChartRealisasiInvestasi from "@/Pages/ProfilDaerah/Partials/ChartRealisasiInvestasi";
import ChartPDRBPerSektor from "@/Pages/ProfilDaerah/Partials/ChartPDRBPerSektor";

const Statistik = () => {
    return (
        <>
            <div className="mt-4">
                <h2 className="text-xl font-bold ">Statistik</h2>
                <div className="flex flex-col gap-y-4">
                    <ChartPDRB></ChartPDRB>
                    <ChartRealisasiInvestasi></ChartRealisasiInvestasi>
                    <ChartPDRBPerSektor className="w-full" />
                </div>
            </div>
        </>
    );
};

export default Statistik;
