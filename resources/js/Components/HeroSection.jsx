import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center py-12 lg:py-16"
      style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/4/41/Gedpancasila.jpg")' }}
    >
      {/* Overlay warna dengan opacity */}
      <div className="absolute inset-0 bg-[#2d3f4f] opacity-80"></div>

      {/* Konten Hero */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 gap-12 lg:gap-24">
        {/* Kolom kiri: Teks */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Made Tommy, sans-serif' }}>
            Situs Pencatatan dan Pemantauan Data Investasi Indonesia
          </h1>
          <p className="text-white mb-6" style={{ fontFamily: 'Made Tommy, sans-serif' }}>
            Investolink memungkinkan Anda untuk melakukan pencatatan dan monitoring data investasi masuk (inbound investment) dan investasi keluar (outbound investment)
          </p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg flex items-center justify-center">
            Unduh Panduan
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l8-8 8 8M12 4v12" />
            </svg>
          </button>
        </div>

        {/* Kolom kanan: Embed YouTube Video */}
        <div className="lg:w-1/2">
          <div className="w-full h-64 lg:h-80 rounded-lg shadow-lg overflow-hidden relative z-10">
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
