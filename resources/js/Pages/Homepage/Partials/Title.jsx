import React from "react";
import { withTranslation } from "react-google-multi-lang";

const Title = () => {
    return (
        <div className="px-[48px] mx-auto mb-[32px]">
            <div className=" text-3xl font-bold text-[#2D3985] mb-[8px]">
                Situs Terkait
            </div>
            <div className="text-[#86858D]">
                Pastikan anda tetap terhubung dengan data ekonomi terbaru
                melalui situs-situs mitra BSKLN
            </div>
        </div>
    );
};

export default withTranslation(Title);
