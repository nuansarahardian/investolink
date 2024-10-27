import React from "react";
import { Button } from "@material-tailwind/react";

import { motion } from "framer-motion";

const HeroSection = () => {
    // Animation variants
    const slideInLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    };

    const slideInRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section
            className="relative h-[640px] bg-cover bg-center -mt-10"
            style={{
                clipPath: "ellipse(100% 85% at 50% 15%)",
                backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/4/41/Gedpancasila.jpg")',
            }}
        >
            {/* Overlay warna dengan opacity */}
            <div className="absolute inset-0 bg-[#2d3f4f] opacity-80"></div>

            {/* Konten Hero */}
            <div className="relative sm:mt-0 mt-10 px-6 md:px-12 lg:px-[48px] mx-auto flex flex-col lg:flex-row justify-between h-full">
                {/* Kolom kiri: Teks */}
                <motion.div
                    className="text-center lg:text-left lg:w-1/2 my-auto"
                    initial="hidden"
                    animate="visible"
                    variants={slideInLeft}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white sm:mb-4 mb-4 sm:mt-0 mt-20">
                        Situs Pencatatan Data dan Pemantauan Potensi Investasi
                        Indonesia
                    </h1>
                    <p className="text-white text-sm sm:text-base mb-6">
                        Platform pencatatan data dan pemantauan potensi
                        investasi masuk (inbound) dan investasi keluar
                        (outbound) Indonesia secara lengkap dan terintegrasi
                        melalui Investolink
                    </p>

                    <a
                        href="/panduan_investasi.pdf" // Adjust the path as necessary
                        download="panduan_investasi.pdf"
                    >
                        <Button
                            style={{ textTransform: "none" }}
                            className="border-white border-2 text-white px-6 py-3 rounded-lg flex items-center justify-center font-bold h-[42px] text-[12px] mx-auto lg:mx-0"
                        >
                            Unduh Panduan
                            <img
                                className="ml-2 w-5"
                                src="icon/download.png"
                                alt=""
                            />
                        </Button>
                    </a>
                </motion.div>

                {/* Kolom kanan: Embed YouTube Video */}
                <motion.div
                    className="w-full mx-auto lg:w-[480px] my-auto h-40 sm:h-36 sm:w-[272px] md:h-72 lg:h-56 rounded-lg shadow-lg overflow-hidden relative z-[1000]"
                    initial="hidden"
                    animate="visible"
                    variants={slideInRight}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/CMwxh6v4bRM?si=iyCX6Ym32TPYt6Jd"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
