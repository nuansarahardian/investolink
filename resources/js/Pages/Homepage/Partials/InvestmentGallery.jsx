import React from "react";
// Import file JSON
import projectsData from "../../../../../public/json/projects.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const InvestmentGallery = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedProject, setSelectedProject] = React.useState(null);

    const closeIcon = (
        <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
            <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                        fill="#ffffff"
                    ></path>{" "}
                </g>
            </svg>
        </svg>
    );

    const openModal = (project) => {
        setSelectedProject(project);
        setOpen(true);
    };

    const closeModal = () => {
        setOpen(false);
        setSelectedProject(null);
    };

    return (
        <section className="py-16 bg-white">
            <div className="px-[48px] mx-auto ">
                <h2 className="text-3xl font-bold text-[#2D3985] mb-[8px]">
                    Galeri Proyek Investasi
                </h2>
                <p className="text-[#86858D] mb-10">
                    Eksplor beragam proyek investasi dalam negeri milik
                    perusahaan-perusahaan terkemuka di Indonesia
                </p>

                {/* Flexbox untuk kartu proyek investasi */}
                <div className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hidden scrollable-container">
                    {projectsData.projects.map((project, index) => (
                        <div
                            onClick={() => openModal(project)}
                            key={index}
                            className="bg-white rounded-lg shadow-lg flex-shrink-0 w-[300px] h-[300px] flex flex-col cursor-pointer"
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
                                        <FontAwesomeIcon
                                            icon={faLocationDot}
                                            className="mr-1"
                                        />
                                        <span className="text-[14px]">
                                            {project.location}
                                        </span>
                                    </div>
                                    <span
                                        className={`text-sm font-medium rounded-md text-[12px] border px-[10px] py-[6px] ${
                                            {
                                                "Karbon Rendah":
                                                    "bg-[#E2FAE7] text-[#328945] border-[#85C493] border-1",
                                                "Pasokan Air":
                                                    "bg-[#E0F8F7] text-[#007D7B] border-[#6EC8C6] border-1",
                                                Energi: "bg-[#E2EDFA] text-[#1E5AA3] border-[#7DADE8] border-1",
                                                "Pelabuhan & Logistik":
                                                    "bg-[#FDF4D6] text-[#B58B12] border-[#E5C69D] border-1",
                                            }[project.category] ||
                                            "bg-[#F8F3E4] text-[#DB8412] border-[#E5C69D]"
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

                {selectedProject && (
                    <Modal
                        open={open}
                        onClose={closeModal}
                        center
                        closeIcon={closeIcon}
                        classNames={{
                            modal: "p-0", // Menghilangkan padding modal
                        }}
                    >
                        {/* Gambar Proyek */}
                        <img
                            src={selectedProject.images}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover"
                        />
                    </Modal>
                )}
            </div>
        </section>
    );
};

export default InvestmentGallery;
