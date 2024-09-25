import React from "react";
// Import file JSON
import projectsData from "../../../public/json/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const InvestmentGallery = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Galeri Proyek Investasi
                </h2>
                <p className="text-gray-600 mb-10">
                    Eksplor beragam proyek investasi dalam negeri milik
                    perusahaan-perusahaan terkemuka di Indonesia
                </p>

                {/* Flexbox untuk kartu proyek investasi */}
                <div className="flex space-x-6 overflow-x-auto hide-scroll-bar pb-4">
                    {projectsData.projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-lg flex-shrink-0 w-[300px] h-[300px] flex flex-col"
                        >
                            {/* Gambar Proyek */}
                            <img
                                src={project.images}
                                alt={project.title}
                                className="w-full h-[160px] object-cover rounded-t-lg"
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
                                        className={`text-sm font-medium rounded-md text-[12px] border px-[10px] py-[6px] ${
                                            project.category === "Karbon Rendah"
                                                ? "bg-green-100 text-green-600 border-green-600"
                                                : "bg-yellow-100 text-yellow-600 border-yellow-600"
                                        }`}
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
