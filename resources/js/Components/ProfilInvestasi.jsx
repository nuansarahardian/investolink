import React, { useState } from "react";
import ProvinceTable from "./ProvinceTable";
import SectorCards from "./SectorCards";
import { withTranslation } from "react-google-multi-lang";

const ProfilInvestasi = () => {
    const [activeSection, setActiveSection] = useState("provinsi");

    const toggleSection = () => {
        setActiveSection(activeSection === "provinsi" ? "sektor" : "provinsi");
    };

    return (
        <div className="w-full px-9 pb-8 bg-white shadow-md rounded-lg -mt-2">
            {/* Toggle Button */}
            <div className="flex justify-center mb-8 ">
                <div className="flex bg-gray-200 rounded-md w-full h-[60px] ">
                    <button
                        className={` m-auto py-1 px-1 h-[42px] w-full ml-2 rounded-md ${
                            activeSection === "provinsi"
                                ? "bg-[#384AA0] text-white font-bold"
                                : "text-gray-600 font-bold"
                        } rounded-l-md transition`}
                        onClick={toggleSection}
                    >
                        Provinsi
                    </button>
                    <button
                        className={`m-auto py-1 px-1 h-[42px] w-full ml-2 rounded-md ${
                            activeSection === "sektor"
                                ? "bg-[#384AA0] text-white font-bold mr-2"
                                : "text-gray-600 font-bold"
                        } rounded-r-md transition`}
                        onClick={toggleSection}
                    >
                        Sektor dan Komoditas
                    </button>
                </div>
            </div>

            {/* Conditionally Render the Content */}
            {activeSection === "provinsi" ? <ProvinceTable /> : <SectorCards />}
        </div>
    );
};

export default withTranslation(ProfilInvestasi);
