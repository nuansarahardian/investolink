import React, { useState } from "react";

const LegendPDRB = ({ setHoveredColor, className }) => {
    const [showTooltip, setShowTooltip] = useState(false); // State untuk mengontrol tooltip

    return (
        <div className={`w-full bg-white rounded-l-lg ${className}`}>
            <div className="w-full h-[178px] bg-gradient-to-r from-[#5E7ADD] to-[#384AA0] rounded-tl-lg text-white font-bold p-4 flex justify-between items-end relative">
                <div className="text-xl z-10">
                    Peta Potensi Ekonomi Indonesia
                </div>
                <img
                    src="icon/PetaInvestasi.png"
                    alt=""
                    className="absolute bottom-0 right-0 h-full object-contain z-20"
                />
            </div>

            <div className="p-4 relative">
                <div className="flex flex-row items-center">
                    <p className="text-[14px] font-bold mr-1">PDRB </p>

                    <div
                        className="relative"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        <img
                            src="/icon/info.png"
                            className="w-4 h-4 my-auto cursor-pointer"
                            alt="info"
                        />
                        {showTooltip && (
                            <div className="absolute top-0 left-6 bg-black text-white text-xs rounded-md p-2 z-30 w-[250px] tooltip-container">
                                <div className="font-bold mb-1">
                                    Produk Domestik Bruto
                                </div>
                                <p>
                                    Nilai pasar seluruh barang dan jasa yang
                                    dihasilkan oleh suatu negara dalam suatu
                                    periode waktu tertentu.
                                </p>
                                <p className="text-gray-400 mt-1">
                                    Sumber: bareksa.com
                                </p>
                                {/* Arrow Tooltip */}
                                <div className="tooltip-arrow"></div>
                            </div>
                        )}
                    </div>
                </div>
                <p className="text-[14px] text-[#86858D] font-normal mb-3 mt-1">
                    Sumber: BPS (2024)
                </p>

                <div className="gap-y-2 flex flex-col text-[13px]">
                    <div
                        className="flex items-center space-x-2 "
                        onMouseEnter={() => setHoveredColor("#23577E")}
                        onMouseLeave={() => setHoveredColor(null)}
                    >
                        <div
                            className="w-4 h-4 rounded-[4px]"
                            style={{ backgroundColor: "#23577E" }}
                        ></div>
                        <span>Lebih dari Rp1.000 Triliun</span>
                    </div>

                    <div
                        className="flex items-center space-x-2"
                        onMouseEnter={() => setHoveredColor("#3E7AA6")}
                        onMouseLeave={() => setHoveredColor(null)}
                    >
                        <div
                            className="w-4 h-4 rounded-[4px]"
                            style={{ backgroundColor: "#3E7AA6" }}
                        ></div>
                        <span>Rp600 - Rp1.000 Triliun</span>
                    </div>

                    <div
                        className="flex items-center space-x-2"
                        onMouseEnter={() => setHoveredColor("#5899C8")}
                        onMouseLeave={() => setHoveredColor(null)}
                    >
                        <div
                            className="w-4 h-4 rounded-[4px]"
                            style={{ backgroundColor: "#5899C8" }}
                        ></div>
                        <span>Rp250 - Rp600 Triliun</span>
                    </div>

                    <div
                        className="flex items-center space-x-2"
                        onMouseEnter={() => setHoveredColor("#8CBBDD")}
                        onMouseLeave={() => setHoveredColor(null)}
                    >
                        <div
                            className="w-4 h-4 rounded-[4px]"
                            style={{ backgroundColor: "#8CBBDD" }}
                        ></div>
                        <span>Rp150 - Rp250 Triliun</span>
                    </div>

                    <div
                        className="flex items-center space-x-2 "
                        onMouseEnter={() => setHoveredColor("#D0E1ED")}
                        onMouseLeave={() => setHoveredColor(null)}
                    >
                        <div
                            className="w-4 h-4 rounded-[4px]"
                            style={{ backgroundColor: "#D0E1ED" }}
                        ></div>
                        <span>Kurang dari Rp150 Triliun</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegendPDRB;
