import React, { useState } from "react";
import PetaPDRB from "@/Pages/PetaInvestasi/Partials/PetaPDRB";
import PetaKEK from "@/Pages/PetaInvestasi/Partials/PetaKEK";
import LegendPDRB from "@/Pages/PetaInvestasi/Partials/LegendPDRB";
import LegendKEK from "@/Pages/PetaInvestasi/Partials/LegendKEK";

const PetaPotensiEkonomi = () => {
    const [hoveredColor, setHoveredColor] = useState(null);
    const [activeSection, setActiveSection] = useState("PDRB");

    const toggleSection = (section) => {
        setActiveSection(section);
    };

    return (
        <>
            <div className="relative w-[95%] bg-white shadow h-full m-auto mt-10 rounded-[12px] grid grid-cols-4">
                {activeSection === "PDRB" ? (
                    <LegendPDRB
                        className="col-span-1"
                        setHoveredColor={setHoveredColor}
                    />
                ) : (
                    <LegendKEK
                        className="col-span-1"
                        setHoveredColor={setHoveredColor}
                    />
                )}

                {activeSection === "PDRB" ? (
                    <PetaPDRB
                        className="col-span-3"
                        hoveredColor={hoveredColor}
                    />
                ) : (
                    <PetaKEK
                        className="col-span-3"
                        hoveredColor={hoveredColor}
                    />
                )}

                {/* Floating Toggle Button */}
                <div className="absolute top-4 right-4 z-[1000]">
                    <div className="flex bg-white rounded-full w-48 h-[42px] drop-shadow-sm ">
                        <button
                            className={`m-auto h-[42px] w-full rounded-full z-10 drop-shadow-sm ${
                                activeSection === "PDRB"
                                    ? "bg-[#384AA0] text-white font-bold"
                                    : "text-gray-600 font-bold"
                            } transition`}
                            onClick={() => toggleSection("PDRB")}
                        >
                            PDRB
                        </button>
                        <button
                            className={`m-auto h-[42px] w-full rounded-full ${
                                activeSection === "KEK"
                                    ? "bg-[#384AA0] text-white font-bold"
                                    : "text-gray-600 font-bold"
                            } transition`}
                            onClick={() => toggleSection("KEK")}
                        >
                            KEK
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PetaPotensiEkonomi;
