import React, { useState } from "react";
import GeoMap from "@/Pages/PetaInvestasi/Partials/PetaPDRB";
import Legend from "@/Pages/PetaInvestasi/Partials/Legend";

const PetaPotensiEkonomi = () => {
    const [hoveredColor, setHoveredColor] = useState(null);

    return (
        <>
            <div className="w-[95%] bg-white shadow h-full m-auto mt-10 rounded-[12px] grid grid-cols-4">
                <Legend
                    className="col-span-1"
                    setHoveredColor={setHoveredColor}
                />
                <GeoMap className="col-span-3" hoveredColor={hoveredColor} />
            </div>
        </>
    );
};

export default PetaPotensiEkonomi;
