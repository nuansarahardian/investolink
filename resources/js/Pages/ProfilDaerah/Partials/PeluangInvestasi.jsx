import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import FotoPeluangProvinsi from "../../../../../public/json/foto_peluang_investasi.json"; // Pastikan path ini benar

const PeluangInvestasi = () => {
    const { props } = usePage();
    const { provinsi } = props;
    const [dataGambar, setDataGambar] = useState(FotoPeluangProvinsi || []); // Inisialisasi dengan data dari JSON

    // Function untuk menangani klik pada kartu
    const handleCardClick = (link_menuju_page) => {
        if (link_menuju_page) {
            window.open(link_menuju_page, "_blank"); // Membuka tautan di tab baru
        }
    };
    return (
        <div className="gap-6 mt-4 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {provinsi.peluang_investasi &&
            provinsi.peluang_investasi.length > 0 ? (
                <>
                    {provinsi.peluang_investasi.map((investasi, index) => {
                        const gambarData = dataGambar.find(
                            (gambar) =>
                                gambar.nama_peluang === investasi.judul_projek
                        );
                        const linkGambar = gambarData
                            ? gambarData.alamat_gambar
                            : "https://via.placeholder.com/150"; // Gambar default jika tidak ditemukan

                        return (
                            <div
                                key={index} // key prop for each card
                                className="flex flex-col justify-between"
                            >
                                <div
                                    className="flex flex-col items-center w-full h-[260px] bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
                                    onClick={() =>
                                        handleCardClick(
                                            investasi.link_menuju_page
                                        )
                                    }
                                >
                                    <div className="flex-none w-full h-[118px]">
                                        <img
                                            src={linkGambar}
                                            alt={investasi.judul_projek}
                                            className="object-cover w-full h-full rounded-t-lg"
                                        />
                                    </div>
                                    <div className="flex flex-col h-full w-full justify-between p-4">
                                        <div className="flex">
                                            <img
                                                src="/icon/Pinpoint.png"
                                                className="w-4 h-4 my-auto"
                                                alt=""
                                            />
                                            <p className="text-gray-600 my-auto">
                                                {investasi.daerah}
                                            </p>
                                        </div>
                                        <h3 className="text-[14px]">
                                            {investasi.judul_projek}
                                        </h3>
                                        <div className="flex">
                                            <h3 className="text-[16px] text-[#384AA0] font-bold">
                                                <a
                                                    onClick={() =>
                                                        handleCardClick(
                                                            investasi.link_menuju_page
                                                        )
                                                    }
                                                >
                                                    Lihat Selengkapnya
                                                </a>
                                            </h3>
                                            <img
                                                src="/icon/Vector.png"
                                                className="w-4 h-4 my-auto ml-1"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>
            ) : (
                <div className="text-center text-gray-500">
                    Tidak ada peluang investasi yang tersedia.
                </div>
            )}
        </div>
    );
};

export default PeluangInvestasi;
