import React from "react";
// Import file JSON
import projectsData from "../../../public/json/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const InvestmentGallery = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Galeri Proyek Investasi
                </h2>
                <p className="text-gray-600 mb-10">
                    Eksplor beragam proyek investasi dalam negeri milik
                    perusahaan-perusahaan terkemuka di Indonesia
                </p>

                {/* Flexbox untuk kartu proyek investasi */}
                <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hidden scrollable-container">
                    {projectsData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg flex-shrink-0 w-[300px] h-[300px] flex flex-col"
                        >
                            {/* Gambar Proyek */}
                            <img
                                src={project.images}
                                alt={project.title}
                                className="w-full h-[160px] object-cover rounded-t-lg "
                            />

                            {/* Informasi Proyek */}
                            <div className="p-[14px] pb-[14px] flex flex-col flex-grow">
                                <div className="flex justify-between items-center mb-3">
                                    <div className="flex items-center font-bold text-gray-500">
                                        <div className="mr-1">
                                            <FontAwesomeIcon
                                                icon={faLocationDot}
                                            />
                                        </div>
                                        <span className="text-[14px]">
                                            {project.location}
                                        </span>
                                    </div>
                                    <span
                                        className={`text-sm font-medium rounded-md text-[12px] border px-[10px] py-[6px] ${(() => {
                                            switch (project.category) {
                                                case "Karbon Rendah":
                                                    return "bg-[#E2FAE7] text-[#328945] border-[#85C493] border-1"; // Hijau
                                                case "Pasokan Air":
                                                    return "bg-[#E0F8F7] text-[#007D7B] border-[#6EC8C6] border-1"; // Teal
                                                case "Energi":
                                                    return "bg-[#E2EDFA] text-[#1E5AA3] border-[#7DADE8] border-1"; // Biru
                                                case "Pelabuhan & Logistik":
                                                    return "bg-[#FDF4D6] text-[#B58B12] border-[#E5C69D] border-1"; // Kuning
                                                default:
                                                    return "bg-[#F8F3E4] text-[#DB8412] border-[#E5C69D]"; // Warna default jika kategori tidak ditemukan
                                            }
                                        })()}`}
                                    >
                                        {project.category}
                                    </span>
                                </div>

                                {/* Judul Proyek */}
                                <h3 className="text-[16px] font-normal text-gray-800 truncate-2 leading-tight">
                                    {project.title}
                                </h3>

                                {/* Nama Perusahaan */}
                                <p className="text-[14px] text-[#121D66] font-semibold mt-auto">
                                    {project.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InvestmentGallery;
