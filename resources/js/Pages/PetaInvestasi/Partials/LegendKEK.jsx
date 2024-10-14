import React from "react";

const LegendKEK = (className) => {
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
                    <p className="text-[14px] font-bold mr-1">KEK </p>
                </div>
                <p className="text-[14px] text-[#86858D] font-normal mb-2">
                    Sumber: kek.go.id
                </p>

                <div className="gap-y-2 flex flex-col text-[13px]">
                    <p>
                        Kawasan Ekonomi Khusus (KEK) adalah kebijakan strategis
                        Pemerintah untuk pengembangan pusat pertumbuhan ekonomi,
                        pemerataan ekonomi nasional, mendukung industrialisasi,
                        dan memperbesar penyerapan tenaga kerja di Indonesia
                        dengan fasilitas dan kemudahan yang optimal bagi
                        investor dalam dan luar negeri.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LegendKEK;
