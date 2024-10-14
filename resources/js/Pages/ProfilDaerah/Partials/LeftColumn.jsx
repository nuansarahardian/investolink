import React, { useState } from "react";
import { Modal } from "react-responsive-modal";
import kekImages from "../../../../../public/json/kek_image.json";
import "react-responsive-modal/styles.css";
import ModalKawasanIndustri from "@/Pages/ProfilDaerah/Partials/ModalKawasanIndustri";

const LeftColumn = ({ formatNumber, provinsi }) => {
    const [open, setOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCardClick = (link_terkait) => {
        if (link_terkait) {
            window.open(link_terkait, "_blank"); // Membuka link di tab baru
        }
    };

    const closeIcon = (
        <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                fill="#A5A5A5"
            ></path>
        </svg>
    );

    const openModal = (project) => {
        setSelectedProject(project); // Set project (kawasan industri) yang dipilih
        setOpen(true); // Buka modal
    };

    const closeModal = () => {
        setOpen(false); // Tutup modal
        setSelectedProject(null); // Reset project
    };

    const findKekImage = (kekName) => {
        const kek = kekImages.find((item) => item.KEK === kekName);
        return kek ? kek.Image : "https://via.placeholder.com/150";
    };

    return (
        <div className="col-span-1 bg-white p-4 shadow-lg rounded-lg border-2 border-slate-100">
            <h1 className="text-2xl font-bold text-[#384AA0]">
                Profil Daerah: {provinsi.nama_provinsi}
            </h1>
            <div className="flex gap-4">
                <div className="mt-4 text-[#86858D] gap-2 flex flex-col">
                    <p>Luas Wilayah: </p>
                    <p>Jumlah Penduduk: </p>
                    <p>Jumlah Kawasan Industri: </p>
                </div>
                <div className="mt-4 gap-2 flex flex-col">
                    <p>{formatNumber(provinsi.luas_area)} km²</p>
                    <p>{formatNumber(provinsi.populasi)} jiwa</p>
                    <p
                        className="text-[#384AA0] cursor-pointer"
                        onClick={() => openModal(provinsi.kawasan_industri)}
                    >
                        {provinsi.kawasan_industri?.length || "N/A"} Kawasan
                    </p>
                </div>
            </div>

            {/* Tampilkan Kawasan Ekonomi Khusus jika ada */}
            {provinsi.kawasan_ekonomi_khusus?.length > 0 ? (
                <div className="mt-6">
                    <h2 className="text-lg mb-4 font-semibold">
                        Kawasan Ekonomi Khusus (KEK)
                    </h2>

                    {provinsi.kawasan_ekonomi_khusus.map((kek, index) => (
                        <div
                            key={index}
                            className="flex flex-none items-center h-[132px] mb-4 bg-white rounded-lg border cursor-pointer hover:drop-shadow-sm transition-colors duration-200 w-full"
                            onClick={() => openModal(kek)} // Buka modal dengan data kawasan yang dipilih
                        >
                            <div className="w-[132px] flex-none h-full flex mr-4">
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
                                                )}{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="mt-8">
                    Tidak ada data Kawasan Ekonomi Khusus (KEK) yang tersedia.
                </p>
            )}

            {/* Modal untuk menampilkan detail Kawasan Industri */}
            <Modal
                open={open}
                onClose={closeModal}
                center
                closeIcon={closeIcon} // Menggunakan closeIcon yang didefinisikan
                classNames={{ modal: "rounded-lg" }}
            >
                {/* Menampilkan ModalKawasanIndustri dengan data dari kawasan yang dipilih */}
                {selectedProject ? (
                    <ModalKawasanIndustri project={selectedProject} />
                ) : (
                    <p>Tidak ada data proyek yang tersedia.</p>
                )}
            </Modal>
        </div>
    );
};

export default LeftColumn;
