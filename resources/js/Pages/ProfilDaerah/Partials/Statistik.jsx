import React from "react";
import ChartPDRB from "@/Pages/ProfilDaerah/Partials/ChartPDRB";
import ChartRealisasiInvestasi from "@/Pages/ProfilDaerah/Partials/ChartRealisasiInvestasi";
import ChartPDRBPerSektor from "@/Pages/ProfilDaerah/Partials/ChartPDRBPerSektor";

const Statistik = () => {
    return (
        <>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Statistik</h2>
                <ChartPDRB></ChartPDRB>
                <ChartRealisasiInvestasi></ChartRealisasiInvestasi>
                <ChartPDRBPerSektor className="w-full" />
            </div>
        </>
    );
};

export default Statistik;
