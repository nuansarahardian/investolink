import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

import provinces from "../../../public/json/provinces.json"; // Adjust the import path as necessary
import sectors from "../../../public/json/banner-sector.json";

const SectorCards = () => {
    const { sektorData } = usePage().props; // Data sektor dari database
    const [selectedCard, setSelectedCard] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };
    const handleProvinsiClick = (provinsiId) => {
        Inertia.get(`/provinsi/${provinsiId}`);
    };

    // Filter sektor berdasarkan pencarian
    const filteredCards = sektorData.filter((card) =>
        card.nama_sektor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Mapping logo provinsi
    const provinceLogos = provinces.reduce((acc, province) => {
        acc[province.provinsi] = province.url_image;
        return acc;
    }, {});

    // Mapping banner sektor dari file JSON
    const sectorBanner = sectors.reduce((acc, sector) => {
        acc[sector.sektor] = sector.banner;
        return acc;
    }, {});

    return (
        <div className="">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Profil Investasi - Sektor dan Komoditas
            </h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 ">
                    <div className="relative bg-white rounded-lg shadow-md h-[624px] overflow-y-auto ">
                        <div className="sticky top-0 bg-white py-6 px-4 z-10 mb-4 border-b-2 border-slate-200 drop-shadow-sm ">
                            {/* fitur pencarian sektor */}
                            <input
                                type="text"
                                placeholder="Cari sektor dan komoditas"
                                className="w-full px-4 py-2 border border-[#86858D] text-[#86858D] bg-[#F7F6F8] rounded-[6px] focus:outline-none focus:border-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <div className="absolute left-[380px] top-8 w-6 h-6">
                                <img src="icon/Search.png" alt="" />
                            </div>
                        </div>
                        {/* bagian kiri card */}
                        {filteredCards.map((card, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(card)}
                                className={`flex flex-none items-center h-[98px] pr-4 mx-4 mb-4 bg-white rounded-lg border cursor-pointer hover:drop-shadow-sm transition-colors duration-200 ${
                                    selectedCard &&
                                    selectedCard.nama_sektor ===
                                        card.nama_sektor
                                        ? "bg-blue-100/50 border-[#A5B1E8]" // Ganti warna latar belakang dan border untuk card yang aktif
                                        : "border-[#D1D0D7] hover:bg-[#eff2fa] active:bg-[#F0F3FF]"
                                }`}
                            >
                                {/* Ambil banner sektor dari JSON, fallback jika tidak ada */}
                                <div className="w-[98px] flex-none h-full flex mr-4">
                                    <img
                                        src={
                                            sectorBanner[card.nama_sektor] ||
                                            "https://via.placeholder.com/150"
                                        }
                                        alt={card.nama_sektor}
                                        className="relative min-w-full mr-4 rounded-l-lg object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-between h-full py-[12px] ">
                                    <div>
                                        <h3 className="font-medium text-[14px] text-clip ">
                                            {card.nama_sektor}
                                        </h3>
                                    </div>

                                    <div className="flex flex-row">
                                        <div className="flex mr-4">
                                            <img
                                                src="icon/Pinpoint.png"
                                                className="w-4 h-4 my-auto"
                                                alt=""
                                            />
                                            <p className="text-[#86858D] text-[12px] mt-[1.5px]">
                                                {card.jumlah_provinsi} Wilayah
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <img
                                                src="icon/Commodity.png"
                                                className="w-4 h-4 my-auto mr-1"
                                                alt=""
                                            />
                                            <p className="text-[#86858D] text-[12px] mt-[1.5px]">
                                                {card.komoditas.length}{" "}
                                                Komoditas
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* bagian kanan card */}
                <div className="col-span-2">
                    <div className="relative bg-white rounded-lg shadow-md h-[624px] overflow-y-auto">
                        {selectedCard ? (
                            <div>
                                <div className="relative ">
                                    {/* Banner yang dipilih akan ditampilkan */}
                                    <div className="bg-bottom">
                                        <img
                                            src={
                                                sectorBanner[
                                                    selectedCard.nama_sektor
                                                ] ||
                                                "https://via.placeholder.com/1920x600"
                                            }
                                            alt={selectedCard.nama_sektor}
                                            className="min-w-full h-[192px] object-cover"
                                        />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 text-white">
                                        <h2 className="text-[24px] font-bold mb-[24px] ml-[24px]">
                                            {selectedCard.nama_sektor}
                                        </h2>
                                    </div>
                                </div>

                                <div className="ml-[24px] mt-[24px]">
                                    <p className="font-bold">
                                        Terdapat {selectedCard.jumlah_provinsi}{" "}
                                        Provinsi Pemilik Sektor
                                    </p>

                                    <div className="flex m-auto mt-4 rounded-lg border bg-[#F7F6F8] border-[#D1D0D7] text-[#86858D] h-[40px] overflow-y-auto mr-[24px]">
                                        <p className="m-auto">
                                            <b>PRO TIP :</b> Anda dapat
                                            menyaring data komoditas berdasarkan
                                            provinsi dengan memilih daftar
                                            provinsi berikut
                                        </p>
                                    </div>

                                    {/* Card Menampilkan Provinsi */}
                                    <div className="grid grid-cols-6 gap-4 mr-[24px] mt-4">
                                        {Array.from(
                                            new Set(
                                                selectedCard.komoditas.flatMap(
                                                    (komoditas) =>
                                                        komoditas.provinsi.map(
                                                            (provinsi) =>
                                                                provinsi.nama
                                                        ) // Ambil nama sebagai string
                                                )
                                            )
                                        ).map((uniqueProvinsiName, index) => {
                                            const provinsi =
                                                selectedCard.komoditas
                                                    .flatMap(
                                                        (komoditas) =>
                                                            komoditas.provinsi
                                                    )
                                                    .find(
                                                        (prov) =>
                                                            prov.nama ===
                                                            uniqueProvinsiName
                                                    );

                                            if (!provinsi || !provinsi.id) {
                                                console.error(
                                                    "Provinsi ID tidak ditemukan untuk:",
                                                    uniqueProvinsiName
                                                );
                                                return null; // Skip rendering jika provinsi_id tidak ditemukan
                                            }

                                            return (
                                                <div
                                                    key={index}
                                                    className="card col-span-1 flex flex-col justify-between p-4 rounded-lg border min-w-[116px] max-w-full bg-[#ffffff] border-[#D1D0D7] text-[#86858D] h-[96px] cursor-pointer"
                                                    onClick={() =>
                                                        handleProvinsiClick(
                                                            provinsi.id
                                                        )
                                                    } // Menggunakan provinsi_id yang baru ditambahkan
                                                >
                                                    <div className="flex justify-between">
                                                        <img
                                                            src={
                                                                provinceLogos[
                                                                    uniqueProvinsiName
                                                                ] ||
                                                                "https://via.placeholder.com/150"
                                                            }
                                                            className="w-6 mb-2"
                                                            alt={
                                                                uniqueProvinsiName
                                                            }
                                                        />
                                                        <img
                                                            src="icon/Vector.png"
                                                            alt="icon"
                                                            className="w-4 h-4"
                                                        />
                                                    </div>
                                                    <p className="text-[12px] leading-tight">
                                                        {uniqueProvinsiName}
                                                    </p>{" "}
                                                    {/* Pastikan ini adalah string */}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    <div className="mt-6  ">
                                        <p className="font-bold mb-4">
                                            {" "}
                                            Komoditas
                                        </p>
                                        {/* tabel komoditas tiap provinsi */}
                                        <div className="border border-gray-300 mr-[24px] shadow-sm mb-60 rounded-[4px] overflow-hidden">
                                            <table className="min-w-full table-auto border-collapse bg-white ">
                                                <thead className="bg-gray-200 sticky top-0 z-10 h-12 ">
                                                    <tr className="text-center border-b border-gray-300">
                                                        <th className="p-4 text-sm font-bold text-gray-700">
                                                            No
                                                        </th>
                                                        <th className="p-4 text-sm font-bold text-gray-700">
                                                            Nama Komoditas
                                                        </th>
                                                        <th className="p-4 text-sm font-bold text-gray-700">
                                                            Provinsi
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="">
                                                    {(() => {
                                                        let rowIndex = 1;
                                                        return selectedCard.komoditas.flatMap(
                                                            (komoditas) =>
                                                                komoditas.provinsi.map(
                                                                    (
                                                                        provinsi
                                                                    ) => (
                                                                        <tr
                                                                            key={
                                                                                rowIndex
                                                                            }
                                                                            className={`text-center border-b 
                                            ${
                                                rowIndex % 2 === 0
                                                    ? "bg-gray-100"
                                                    : "bg-white"
                                            } 
                                            hover:bg-gray-300 transition-colors duration-200`}
                                                                        >
                                                                            <td className="p-4">
                                                                                {
                                                                                    rowIndex++
                                                                                }
                                                                            </td>
                                                                            <td className="p-4">
                                                                                {
                                                                                    komoditas.nama_komoditas
                                                                                }
                                                                            </td>
                                                                            <td className="p-4">
                                                                                {
                                                                                    provinsi.nama
                                                                                }
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                )
                                                        );
                                                    })()}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col h-full ">
                                <div className="m-auto">
                                    <img
                                        src="images/sektor.png"
                                        className="my-auto mx-auto"
                                        alt="fallback"
                                    />
                                    <div className="text-center m-auto mt-12">
                                        <p className="text-[#86858D] font-bold">
                                            Data Tidak Ditemukan
                                        </p>
                                        <p className="text-[#86858D] mt-1">
                                            Detail akan ditampilkan setelah Anda
                                            memilih salah satu sektor
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectorCards;
