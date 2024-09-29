import React from "react";

const HeroSection = () => {
    return (
        <section
            className="relative h-[550px] bg-cover bg-center py-12 lg:py-16"
            style={{
                clipPath: "ellipse(100% 85% at 50% 15%)",
                backgroundImage:
                    'url("https://upload.wikimedia.org/wikipedia/commons/4/41/Gedpancasila.jpg")',
            }}
        >
            {/* Overlay warna dengan opacity */}
            <div className="absolute inset-0 bg-[#2d3f4f] opacity-80"></div>

            {/* Konten Hero */}
            <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-6 gap-12 lg:gap-16">
                {/* Kolom kiri: Teks */}
                <div className="text-center lg:text-left lg:w-1/2 mt-16">
                    <h1 className="text-4xl font-bold text-white mb-6">
                        Situs Pencatatan dan Pemantauan Data Investasi Indonesia
                    </h1>
                    <p className="text-white mb-6">
                        Investolink memungkinkan Anda untuk melakukan pencatatan
                        dan monitoring data investasi masuk (inbound investment)
                        dan investasi keluar (outbound investment)
                    </p>
                    <button className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center">
                        Unduh Panduan
                        <img
                            className="ml-2 w-5"
                            src="icon/download.png"
                            alt=""
                        />
                    </button>
                </div>

                {/* Kolom kanan: Embed YouTube Video */}
                <div className="lg:w-1/2">
                    <div className="w-[] h-48 lg:h-56 rounded-lg shadow-lg overflow-hidden relative z-10">
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
            </div>
        </section>
    );
};

export default HeroSection;
