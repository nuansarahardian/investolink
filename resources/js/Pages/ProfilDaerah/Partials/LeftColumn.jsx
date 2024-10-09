import React from "react";
// Mengimpor file JSON

import kekImages from "../../../../../public/json/kek_image.json";

const LeftColumn = ({ formatNumber, provinsi }) => {
    const handleCardClick = (link_terkait) => {
        if (link_terkait) {
            window.open(link_terkait, "_blank"); // Membuka link di tab baru
        }
    };

    // Fungsi untuk mencari gambar KEK berdasarkan nama
    const findKekImage = (kekName) => {
        const kek = kekImages.find((item) => item.KEK === kekName);
        return kek ? kek.Image : "https://via.placeholder.com/150";
    };

    return (
        <div className="col-span-1 bg-white p-4 shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-[#384AA0]">Profil Daerah</h1>
            <div className="flex gap-4">
                <div className="mt-4 text-[#86858D] gap-2 flex flex-col">
                    <p>Luas Wilayah: </p>
                    <p>Jumlah Penduduk: </p>
                    <p>Jumlah Kawasan Industri: </p>
                </div>
                <div className="mt-4 gap-2 flex flex-col">
                    <p>{formatNumber(provinsi.luas_area)} km²</p>
                    <p>{formatNumber(provinsi.populasi)} jiwa</p>
                    <p className="text-[#384AA0]">
                        {provinsi.kawasan_industri?.length || "N/A"} Kawasan
                    </p>
                </div>
            </div>

            {/* Kondisional menampilkan KEK jika data tersedia */}
            {provinsi.kawasan_industri?.length > 0 ? (
                <div className="mt-6">
                    <h2 className="text-lg mb-4 font-semibold">
                        Kawasan Ekonomi Khusus (KEK)
                    </h2>

                    {provinsi.kawasan_industri.map((kek, index) => (
                        <div
                            key={index}
                            className="flex flex-none items-center h-[132px] mb-4 bg-white rounded-lg border cursor-pointer hover:drop-shadow-sm transition-colors duration-200 w-full"
                            onClick={() => handleCardClick(kek.link_terkait)}
                        >
                            <div className="w-[132px] flex-none h-full flex mr-4">
                                {/* Menggunakan fungsi findKekImage untuk mendapatkan gambar yang sesuai */}
                                <img
                                    src={findKekImage(
                                        kek.nama_kawasan_industri
                                    )}
                                    className="relative min-w-full mr-4 rounded-l-lg object-cover"
                                    alt={kek.nama_kawasan_industri}
                                />
                            </div>

                            <div className="flex flex-col justify-between h-full py-[12px] ">
                                <div className="my-auto">
                                    <h3 className="font-bold text-[16px]">
                                        {kek.nama_kawasan_industri}
                                    </h3>
                                    <h3 className=" text-[#86858D] text-[14px] ">
                                        {kek.kabupaten_atau_kota}
                                    </h3>
                                    <div className="flex flex-row gap-2 mt-3">
                                        <div className="">
                                            <p className="text-[#86858D] text-[14px] text-clip">
                                                Luas
                                            </p>
                                            <p className="text-[#86858D] text-[14px] mt-[1.5px]">
                                                Target Investasi
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium text-[14px] text-clip">
                                                {formatNumber(kek.luas_lahan)}{" "}
                                            </p>
                                            <p className="font-medium text-[14px] mt-[1.5px]">
                                                {formatNumber(
                                                    kek.target_investasi
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>
                    Tidak ada data Kawasan Ekonomi Khusus (KEK) yang tersedia.
                </p>
            )}
        </div>
    );
};

export default LeftColumn;
