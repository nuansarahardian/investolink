import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import provinces from "../../../../../public/json/provinces.json";
import sectors from "../../../../../public/json/banner-sector.json";
import FotoPeluangProvinsi from "../../../../../public/json/foto_peluang_investasi.json"; // Gambar peluang investasi

const PeluangInvestasiPrioritas = () => {
    const { sektorData } = usePage().props;
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const [selectedCard, setSelectedCard] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedProvince, setSelectedProvince] = useState(""); // Untuk dropdown provinsi
    const [selectedSektor, setSelectedSektor] = useState(""); // Untuk dropdown sektor
    const [dataGambar] = useState(FotoPeluangProvinsi || []); // Gambar dari JSON

    const handleCardClick = (card) => {
        setSelectedCard(card);
        setSelectedProvince("");
        setSelectedSektor(""); // Reset filter saat sektor baru dipilih
    };

    // Filter sektor berdasarkan pencarian di nama sektor, peluang investasi, atau provinsi
    const filteredCards = sektorData.filter((card) => {
        const matchSektor = card.nama_sektor
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchPeluang = card.peluang_investasi.some((peluang) =>
            peluang.judul_projek
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );

        const matchProvinsi = card.peluang_investasi.some((peluang) =>
            peluang.nama_provinsi
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );

        return matchSektor || matchPeluang || matchProvinsi;
    });

    // Filter peluang investasi berdasarkan provinsi dan sektor yang dipilih dari dropdown
    const filteredPeluangInvestasi = selectedCard
        ? selectedCard.peluang_investasi
              .filter(
                  (peluang) =>
                      (selectedSektor === "" ||
                          peluang.judul_projek === selectedSektor) &&
                      (selectedProvince === "" ||
                          peluang.nama_provinsi === selectedProvince)
              )
              .map((peluang) => ({
                  judul_projek: peluang.judul_projek,
                  provinsi: peluang.nama_provinsi,
                  daerah: peluang.daerah,
                  link_menuju_page: peluang.link_menuju_page,
              }))
              .sort((a, b) => a.provinsi.localeCompare(b.provinsi))
        : [];

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
    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage; // Menghitung indeks item terakhir di halaman ini
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; // Menghitung indeks item pertama di halaman ini
    const currentItems = filteredPeluangInvestasi.slice(
        indexOfFirstItem,
        indexOfLastItem // Mengambil item yang sesuai dengan halaman ini
    );

    // Calculate total pages
    const totalPages = Math.ceil(
        filteredPeluangInvestasi.length / itemsPerPage
    );
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1); // Menggeser ke halaman berikutnya
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1); // Menggeser ke halaman sebelumnya
        }
    };

    return (
        <div className="">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Profil Investasi - Sektor dan Peluang Investasi
            </h2>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                    <div className="relative bg-white rounded-lg shadow-md h-[905px] overflow-y-auto border-2 border-[#DFE3F6]/50">
                        <div className="sticky top-0 bg-white py-6 px-4 z-10 mb-4 border-b-2 border-slate-200 drop-shadow-sm ">
                            {/* fitur pencarian sektor */}
                            <input
                                type="text"
                                placeholder="Cari sektor, peluang, atau provinsi"
                                className="w-full px-4 py-2 border border-[#86858D] text-[#86858D] bg-[#F7F6F8] rounded-[6px] focus:outline-none focus:border-blue-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
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
                                        ? "bg-blue-200/70 border-blue-400 active:bg-blue-400"
                                        : "border-[#D1D0D7] hover:bg-[#eff2fa] "
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
                                                alt="Provinsi"
                                            />
                                            <p className="text-[#86858D] text-[12px] mt-[1.5px]">
                                                {card.jumlah_provinsi} Wilayah
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <img
                                                src="/icon/Commodity.png"
                                                className="w-4 h-4 my-auto mr-1"
                                                alt="Peluang"
                                            />
                                            <p className="text-[#86858D] text-[12px] mt-[1.5px]">
                                                {card.peluang_investasi.length}{" "}
                                                Peluang
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
                    <div className="h-full bg-white rounded-lg shadow-md border-2 border-[#DFE3F6]/50 ">
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
                                            className="min-w-full h-[192px] object-cover rounded-t-lg"
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
                                    <div className="h-[660px] flex justify-between flex-col">
                                        <div className="gap-6 mt-4 mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 pr-6">
                                            {currentItems.length > 0 ? (
                                                currentItems.map(
                                                    (peluang, index) => {
                                                        const gambarData =
                                                            dataGambar.find(
                                                                (gambar) =>
                                                                    gambar.nama_peluang ===
                                                                    peluang.judul_projek
                                                            );
                                                        const linkGambar =
                                                            gambarData
                                                                ? gambarData.alamat_gambar
                                                                : "https://via.placeholder.com/150"; // Gambar default jika tidak ditemukan

                                                        return (
                                                            <div
                                                                key={index}
                                                                className="flex flex-col justify-between"
                                                            >
                                                                <div
                                                                    className="flex flex-col items-center w-full h-[260px] bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-200"
                                                                    onClick={() =>
                                                                        window.open(
                                                                            peluang.link_menuju_page,
                                                                            "_blank"
                                                                        )
                                                                    }
                                                                >
                                                                    <div className="flex-none w-full h-[118px]">
                                                                        <img
                                                                            src={
                                                                                linkGambar
                                                                            }
                                                                            alt={
                                                                                peluang.judul_projek
                                                                            }
                                                                            className="object-cover w-full h-full rounded-t-lg"
                                                                        />
                                                                    </div>
                                                                    <div className="flex flex-col h-full w-full justify-between p-4">
                                                                        <div className="flex">
                                                                            <img
                                                                                src="/icon/Pinpoint.png"
                                                                                className="w-4 h-4 my-auto"
                                                                                alt="Provinsi"
                                                                            />
                                                                            <p className="text-gray-600 my-auto">
                                                                                {
                                                                                    peluang.daerah
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                        <h3 className="text-[14px]">
                                                                            {
                                                                                peluang.judul_projek
                                                                            }
                                                                        </h3>
                                                                        <div className="flex">
                                                                            <h3 className="text-[16px] text-[#384AA0] font-bold">
                                                                                <a
                                                                                    onClick={() =>
                                                                                        window.open(
                                                                                            peluang.link_menuju_page,
                                                                                            "_blank"
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    Lihat
                                                                                    Selengkapnya
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
                                                    }
                                                )
                                            ) : (
                                                <div className="text-center text-gray-500">
                                                    Tidak ada peluang investasi
                                                    yang tersedia.
                                                </div>
                                            )}
                                        </div>
                                        {/* Pagination controls */}
                                        <div className="flex justify-between items-center mb-6 pr-6 bg-white rounded-lg ">
                                            <button
                                                onClick={handlePrevPage}
                                                disabled={currentPage === 1}
                                                className="flex items-center px-4 py-2 bg-gradient-to-r from-[#5E7ADD] to-[#2D3985] text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 mr-2"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.293 15.707a1 1 0 010-1.414L8.414 10l3.879-3.879a1 1 0 10-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                Previous
                                            </button>
                                            <p className="text-lg font-medium text-gray-700">
                                                Page{" "}
                                                <span className="text-[#384AA0]">
                                                    {currentPage}
                                                </span>{" "}
                                                of{" "}
                                                <span className="text-[#384AA0]">
                                                    {totalPages}
                                                </span>
                                            </p>
                                            <button
                                                onClick={handleNextPage}
                                                disabled={
                                                    currentPage === totalPages
                                                }
                                                className="flex items-center px-4 py-2 bg-gradient-to-r from-[#5E7ADD] to-[#2D3985] text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                                            >
                                                Next
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 ml-2"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.707 4.293a1 1 0 010 1.414L11.586 10l-3.879 3.879a1 1 0 101.414 1.414l5-5a1 1 0 000-1.414l-5-5a1 1 0 00-1.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
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

export default PeluangInvestasiPrioritas;
