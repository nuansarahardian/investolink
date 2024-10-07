import React from "react";

const Legend = ({ setHoveredColor, className }) => {
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

            <div className="p-4">
                <div className="flex flex-row">
                    <p className="text-[14px] font-bold mr-1">PDRB </p>

                    <img
                        src="/icon/info.png"
                        className="w-4 h-4 my-auto"
                        alt="info"
                    />
                </div>
                <p className="text-[14px] text-[#86858D] font-normal mb-2">
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

export default Legend;
