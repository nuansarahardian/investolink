import React, { useRef } from "react";
import NavBar from "@/Components/layout/NavBar";
import Footer from "@/Components/layout/Footer";
import ProfilInvestasi from "@/Components/ProfilInvestasi";
import PetaPotensiEkonomi from "@/Pages/PetaInvestasi/Partials/PetaPotensiEkonomi";
import Statistik from "@/Pages/PetaInvestasi/Partials/Statistik";
import "leaflet/dist/leaflet.css";

import { motion, useInView } from "framer-motion";

const PetaInvestasi = () => {
    // Define animation variants with smoother and slower transitions
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const slideInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const slideInLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    // Refs for each section
    const navBarRef = useRef(null);
    const petaRef = useRef(null);
    const profilRef = useRef(null);
    const statistikRef = useRef(null);
    const footerRef = useRef(null);

    // Check if each section is in view
    const isNavBarInView = useInView(navBarRef, { triggerOnce: true });
    const isPetaInView = useInView(petaRef, { triggerOnce: true });
    const isProfilInView = useInView(profilRef, { triggerOnce: true });
    const isStatistikInView = useInView(statistikRef, { triggerOnce: true });
    const isFooterInView = useInView(footerRef, { triggerOnce: true });

    return (
        <>
            <motion.div
                ref={navBarRef}
                initial="hidden"
                animate={isNavBarInView ? "visible" : "hidden"}
                transition={{ duration: 1.0, ease: "easeOut" }}
                variants={fadeIn}
            >
                <NavBar />
            </motion.div>

            <div className="bg-[#FAFAFA] h-fit pb-12">
                <div className="flex flex-col justify-center align-middle place-content-center m-auto">
                    {/* PetaPotensiEkonomi with slide-up animation */}
                    <motion.div
                        ref={petaRef}
                        initial="hidden"
                        animate={isPetaInView ? "visible" : "hidden"}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        variants={slideInUp}
                    >
                        <PetaPotensiEkonomi />
                    </motion.div>

                    <motion.div
                        ref={profilRef}
                        className="w-[95%] bg-white shadow h-full m-auto mt-10 rounded-[12px]"
                        initial="hidden"
                        animate={isProfilInView ? "visible" : "hidden"}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        variants={slideInUp}
                    >
                        <div className="w-full p-[32px] m-auto text-[#3F3F3F]">
                            <div className="flex">
                                <img
                                    src="/icon/Icon.png"
                                    className="h-[48px] mr-4"
                                    alt=""
                                />
                                <div className="flex flex-col my-auto">
                                    <p className="font-bold text-xl text-[#2D3985]">
                                        Profil Investasi
                                    </p>
                                    <p className="text-sm text-[#86858D]">
                                        Dapatkan wawasan yang beragam terkait
                                        peluang investasi di indonesia
                                        berdasarkan provinsi, sektor, dan
                                        komoditas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <ProfilInvestasi />
                    </motion.div>

                    {/* Statistik section with fade-in animation */}
                    <motion.div
                        ref={statistikRef}
                        initial="hidden"
                        animate={isStatistikInView ? "visible" : "hidden"}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                        variants={fadeIn}
                    >
                        <Statistik />
                    </motion.div>
                </div>
            </div>

            {/* Footer with fade-in animation */}
            <motion.div
                ref={footerRef}
                initial="hidden"
                animate={isFooterInView ? "visible" : "hidden"}
                transition={{ duration: 1.0, ease: "easeOut" }}
                variants={fadeIn}
            >
                <Footer />
            </motion.div>
        </>
    );
};

export default PetaInvestasi;
