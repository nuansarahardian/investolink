import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import provinces from "../../../public/json/provinces.json";
import sectors from "../../../public/json/banner-sector.json";
import { Link } from "@inertiajs/react";
import Select from "react-select";

const SectorCards = () => {
    const { sektorData } = usePage().props;

    const [selectedCard, setSelectedCard] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProvince, setSelectedProvince] = useState("");
    const [selectedKomoditas, setSelectedKomoditas] = useState("");

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setSelectedProvince("");
        setSelectedKomoditas("");
    };

    const filteredCards = sektorData.filter((card) => {
        const matchSektor = card.nama_sektor
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const matchKomoditas = card.komoditas.some((komoditas) =>
            komoditas.nama_komoditas
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
        const matchProvinsi = card.komoditas.some((komoditas) =>
            komoditas.provinsi.some((provinsi) =>
                provinsi.nama.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        return matchSektor || matchKomoditas || matchProvinsi;
    });

    const filteredKomoditas = selectedCard
        ? selectedCard.komoditas
              .filter(
                  (komoditas) =>
                      (selectedKomoditas === "" ||
                          komoditas.nama_komoditas === selectedKomoditas) &&
                      (selectedProvince === "" ||
                          komoditas.provinsi.some(
                              (provinsi) => provinsi.nama === selectedProvince
                          ))
              )
              .flatMap((komoditas) =>
                  komoditas.provinsi
                      .filter((provinsi) =>
                          selectedProvince === ""
                              ? true
                              : provinsi.nama === selectedProvince
                      )
                      .map((provinsi) => ({
                          nama_komoditas: komoditas.nama_komoditas,
                          provinsi: provinsi.nama,
                          provinsi_id: provinsi.id,
                      }))
              )
              .sort((a, b) => a.provinsi.localeCompare(b.provinsi))
        : [];

    const provinceLogos = provinces.reduce((acc, province) => {
        acc[province.provinsi] = province.url_image;
        return acc;
    }, {});

    const sectorBanner = sectors.reduce((acc, sector) => {
        acc[sector.sektor] = sector.banner;
        return acc;
    }, {});

    const uniqueProvinces = selectedCard
        ? Array.from(
              new Set(
                  selectedCard.komoditas.flatMap((komoditas) =>
                      komoditas.provinsi.map((provinsi) => provinsi.nama)
                  )
              )
          )
        : [];

    const uniqueKomoditas = selectedCard
        ? Array.from(
              new Set(
                  selectedCard.komoditas
                      .filter((komoditas) =>
                          selectedProvince === ""
                              ? true
                              : komoditas.provinsi.some(
                                    (provinsi) =>
                                        provinsi.nama === selectedProvince
                                )
                      )
                      .map((komoditas) => komoditas.nama_komoditas)
              )
          )
        : [];

    return (
        <div className="h-fit px-4 md:px-0">
            <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                Profil Investasi - Sektor dan Komoditas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Left Section (Sectors List) */}
                <div className="col-span-1">
                    <div className="relative bg-white rounded-lg shadow-md h-[520px] md:h-[820px] overflow-y-auto border-2 border-[#DFE3F6]/50">
                        <div className="sticky top-0 bg-white py-4 px-4 z-10 mb-4 border-b-2 border-slate-200 drop-shadow-sm">
                            <input
                                type="text"
                                placeholder="Cari sektor, komoditas, atau provinsi"
                                className="w-full px-4 py-2 border border-[#86858D] text-sm text-[#86858D] bg-[#F7F6F8] rounded-[6px] focus:outline-none focus:border-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {filteredCards.map((card, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(card)}
                                className={`flex flex-none items-center h-[80px] md:h-[98px] pr-4 mx-4 mb-4 bg-white rounded-lg border cursor-pointer hover:drop-shadow-sm transition-colors duration-200 ${
                                    selectedCard &&
                                    selectedCard.nama_sektor ===
                                        card.nama_sektor
                                        ? "bg-blue-200/60 border-blue-400"
                                        : "border-[#D1D0D7] hover:bg-[#eff2fa]"
                                }`}
                            >
                                <div className="w-[80px] md:w-[98px] flex-none h-full flex mr-4">
                                    <img
                                        src={
                                            sectorBanner[card.nama_sektor] ||
                                            "https://via.placeholder.com/150"
                                        }
                                        alt={card.nama_sektor}
                                        className="relative w-full h-full rounded-l-lg object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-between h-full py-[6px] md:py-[12px]">
                                    <h3 className="font-medium text-sm md:text-[14px]">
                                        {card.nama_sektor}
                                    </h3>
                                    <div className="flex flex-row text-xs md:text-sm text-[#86858D]">
                                        <div className="flex mr-2 md:mr-4">
                                            <img
                                                src="icon/Pinpoint.png"
                                                className="w-3 md:w-4 h-3 md:h-4 my-auto"
                                                alt=""
                                            />
                                            <p className="ml-1">
                                                {card.jumlah_provinsi} Wilayah
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <img
                                                src="icon/Commodity.png"
                                                className="w-3 md:w-4 h-3 md:h-4 my-auto mr-1"
                                                alt=""
                                            />
                                            <p>
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

                {/* Right Section (Selected Sector Details) */}
                <div className="col-span-2">
                    <div className="h-full bg-white rounded-lg shadow-md border-2 border-[#DFE3F6]/50">
                        {selectedCard ? (
                            <div>
                                <div className="relative">
                                    <div className="bg-bottom">
                                        <img
                                            src={
                                                sectorBanner[
                                                    selectedCard.nama_sektor
                                                ] ||
                                                "https://via.placeholder.com/1920x600"
                                            }
                                            alt={selectedCard.nama_sektor}
                                            className="w-full h-[150px] md:h-[192px] object-cover rounded-t-lg"
                                        />
                                    </div>

                                    <div className="absolute bottom-0 left-0 right-0 text-white p-4 md:p-6 bg-black/50 rounded-t-lg">
                                        <h2 className="text-lg md:text-[24px] font-bold">
                                            {selectedCard.nama_sektor}
                                        </h2>
                                    </div>
                                </div>

                                <div className="p-4 md:p-6">
                                    <p className="font-bold text-sm md:text-base">
                                        Terdapat {selectedCard.jumlah_provinsi}{" "}
                                        Provinsi Pemilik Sektor
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
                                        {/* Dropdown for Province */}
                                        <Select
                                            className="w-full  z-[1000]"
                                            value={
                                                selectedProvince
                                                    ? {
                                                          label: selectedProvince,
                                                          value: selectedProvince,
                                                      }
                                                    : null
                                            }
                                            onChange={(option) => {
                                                setSelectedProvince(
                                                    option ? option.value : ""
                                                );
                                                setSelectedKomoditas("");
                                            }}
                                            options={uniqueProvinces.map(
                                                (provinsi) => ({
                                                    label: provinsi,
                                                    value: provinsi,
                                                })
                                            )}
                                            isClearable={true}
                                            placeholder="Cari Provinsi..."
                                            classNamePrefix="react-select"
                                        />

                                        {/* Dropdown for Commodity */}
                                        <Select
                                            className="w-full z-[1000]"
                                            value={
                                                selectedKomoditas
                                                    ? {
                                                          label: selectedKomoditas,
                                                          value: selectedKomoditas,
                                                      }
                                                    : null
                                            }
                                            onChange={(option) =>
                                                setSelectedKomoditas(
                                                    option ? option.value : ""
                                                )
                                            }
                                            options={uniqueKomoditas.map(
                                                (komoditas) => ({
                                                    label: komoditas,
                                                    value: komoditas,
                                                })
                                            )}
                                            isClearable={true}
                                            placeholder="Cari Komoditas..."
                                            classNamePrefix="react-select"
                                        />
                                    </div>

                                    {/* Commodity Table */}
                                    <div className="mt-4">
                                        <p className="font-bold mb-2 md:mb-4 text-sm md:text-base">
                                            Komoditas
                                        </p>
                                        <div className="border border-gray-300 shadow-sm rounded-lg overflow-hidden">
                                            <div className="max-h-[200px] md:max-h-[400px] overflow-y-auto">
                                                <table className="w-full table-auto border-collapse bg-white">
                                                    <thead className="bg-[#DFE3F6] sticky top-0 z-10 h-10 md:h-12">
                                                        <tr className="text-center border-b border-gray-300 text-xs md:text-sm">
                                                            <th className="p-2 md:p-4 font-bold text-gray-700">
                                                                No
                                                            </th>
                                                            <th className="p-2 md:p-4 font-bold text-gray-700">
                                                                Nama Komoditas
                                                            </th>
                                                            <th className="p-2 md:p-4 font-bold text-gray-700">
                                                                Provinsi
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {filteredKomoditas.length >
                                                        0 ? (
                                                            filteredKomoditas.map(
                                                                (
                                                                    komoditas,
                                                                    index
                                                                ) => (
                                                                    <tr
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={`border-b ${
                                                                            index %
                                                                                2 ===
                                                                            0
                                                                                ? "bg-white"
                                                                                : "bg-gray-100"
                                                                        } hover:bg-gray-200`}
                                                                    >
                                                                        <td className="p-2 md:p-4 text-center">
                                                                            {index +
                                                                                1}
                                                                        </td>
                                                                        <td className="p-2 md:p-4">
                                                                            {
                                                                                komoditas.nama_komoditas
                                                                            }
                                                                        </td>
                                                                        <td className="p-2 md:p-4">
                                                                            <Link
                                                                                href={`/provinsi/${komoditas.provinsi_id}`}
                                                                                className="text-blue-600 hover:text-blue-500"
                                                                            >
                                                                                {
                                                                                    komoditas.provinsi
                                                                                }
                                                                            </Link>
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            )
                                                        ) : (
                                                            <tr>
                                                                <td
                                                                    colSpan="3"
                                                                    className="p-2 md:p-4 text-center text-gray-500"
                                                                >
                                                                    Data
                                                                    komoditas
                                                                    tidak
                                                                    tersedia
                                                                </td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col h-full justify-center items-center text-center p-4">
                                <img
                                    src="images/sektor.png"
                                    className="w-20 md:w-32 mb-4"
                                    alt="fallback"
                                />
                                <p className="text-sm md:text-base text-[#86858D] font-bold">
                                    Data Tidak Ditemukan
                                </p>
                                <p className="text-xs md:text-sm text-[#86858D] mt-1">
                                    Detail akan ditampilkan setelah Anda memilih
                                    salah satu sektor
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectorCards;
