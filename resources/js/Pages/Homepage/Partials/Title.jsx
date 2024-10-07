import React from "react";
import { withTranslation } from "react-google-multi-lang";

const Title = () => {
    return (
        <div className="flex flex-col m-auto mb-8 text-slate-800 ">
            <div className="m-auto text-3xl font-medium ">Situs Terkait</div>
            <div className="m-auto">
                Pastikan anda tetap terhubung dengan data ekonomi terbaru
                melalui situs-situs mitra BSKLN
            </div>
        </div>
    );
};

export default withTranslation(Title);
