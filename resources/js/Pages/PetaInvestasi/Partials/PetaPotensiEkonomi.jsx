import React, { useState } from "react";
import PetaPDRB from "@/Pages/PetaInvestasi/Partials/PetaPDRB";
import PetaPeluangInvestasi from "@/Pages/PetaInvestasi/Partials/PetaPeluangInvestasi";
import PetaKEK from "@/Pages/PetaInvestasi/Partials/PetaKEK";
import LegendPeluangInvestasi from "@/Pages/PetaInvestasi/Partials/LegendPeluangInvestasi";
import LegendKEK from "@/Pages/PetaInvestasi/Partials/LegendKEK";

const PetaPotensiEkonomi = () => {
    const [hoveredColor, setHoveredColor] = useState(null);
    const [activeSection, setActiveSection] = useState("PDRB");

    const toggleSection = (section) => {
        setActiveSection(section);
    };

    return (
        <div className="relative w-[95%] bg-white shadow h-full m-auto mt-10 rounded-lg md:rounded-[12px] grid grid-cols-1 md:grid-cols-4">
            {/* Legend based on active section */}
            <div className="col-span-1 ">
                {activeSection === "PDRB" ? (
                    <LegendPeluangInvestasi setHoveredColor={setHoveredColor} />
                ) : (
                    <LegendKEK setHoveredColor={setHoveredColor} />
                )}
            </div>

            {/* Map based on active section */}
            <div className="col-span-3 h-full ">
                {activeSection === "PDRB" ? (
                    <PetaPeluangInvestasi hoveredColor={hoveredColor} />
                ) : (
                    <PetaKEK hoveredColor={hoveredColor} />
                )}
            </div>

            {/* Floating Toggle Button */}
            <div className="absolute top-4 right-4 z-[1000]">
                <div className="flex bg-white rounded-full w-[180px] md:w-[240px] h-[42px] shadow-md text-md overflow-hidden">
                    <button
                        className={`flex-1 h-full transition-all ${
                            activeSection === "PDRB"
                                ? "bg-[#384AA0] text-white font-bold"
                                : "text-gray-600"
                        }`}
                        onClick={() => toggleSection("PDRB")}
                    >
                        INVESTASI
                    </button>
                    <button
                        className={`flex-1 h-full transition-all ${
                            activeSection === "KEK"
                                ? "bg-[#384AA0] text-white font-bold"
                                : "text-gray-600"
                        }`}
                        onClick={() => toggleSection("KEK")}
                    >
                        KEK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PetaPotensiEkonomi;
