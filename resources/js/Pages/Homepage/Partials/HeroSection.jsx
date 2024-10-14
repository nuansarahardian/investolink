import React from "react";
import { Button } from "@material-tailwind/react";
import { withTranslation } from "react-google-multi-lang";

const HeroSection = () => {
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
                <div className="text-center lg:text-left lg:w-1/2 my-auto ">
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

                    <Button
                        style={{ textTransform: "none" }}
                        className="border-white border-2 text-white px-6 py-3 rounded-lg flex items-center justify-center font-bold h-[42px] text-[12px]  mx-auto lg:mx-0"
                    >
                        Unduh Panduan
                        <img
                            className="ml-2 w-5"
                            src="icon/download.png"
                            alt=""
                        />
                    </Button>
                </div>

                {/* Kolom kanan: Embed YouTube Video */}
                <div className="w-full mx-auto lg:w-[480px] my-auto h-40 sm:h-36 sm:w-[272px] md:h-72 lg:h-56 rounded-lg shadow-lg overflow-hidden relative z-[1000]">
                    <iframe
                        className="w-full h-full rounded-lg"
                        src="https://www.youtube.com/embed/CMwxh6v4bRM?si=iyCX6Ym32TPYt6Jd"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default withTranslation(HeroSection);
