import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-72"> {/* Perbesar gap */}
        {/* Kolom Kiri */}
        <div className="flex flex-col items-start">
          {/* Logo dan Nama */}
          <div className="flex items-center mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/Lambang_Kemlu.png"
              alt="Logo Kemlu"
              className="h-12 w-12 mr-3"
            />
            <p className="text-2xl">
              <span className="font-bold">INVESTO</span>
              <span className="font-normal">LINK</span>
            </p>
          </div>

          {/* Alamat */}
          <div className="flex items-start mb-4">
            <span className="mr-2 text-lg">📍</span>
            <p className="text-base">
              <span className="font-semibold">Gedung Roeslan Abdulgani Kementerian Luar Negeri RI.</span><br />
              Jl. Taman Pejambon No. 6, Senen, Jakarta Pusat, DKI Jakarta, 10410
            </p>
          </div>

          {/* Jam Operasional */}
          <div className="flex items-start mb-4">
            <span className="mr-2 text-lg">⏰</span>
            <p className="text-base">
              08.00 - 16.00 (Senin-Kamis) | 08.00 - 16.30 (Jum'at)
            </p>
          </div>

          {/* Nomor Telepon */}
          <div className="flex items-start mb-4">
            <span className="mr-2 text-lg">📞</span>
            <p className="text-base">(021) 344 1508</p>
          </div>
          
          {/* Hak Cipta */}
          <p className="text-base mt-6">
            © 2024 <span className="font-semibold">BSKLN</span> dan <span className="font-semibold">TPPE</span>. Hak cipta dilindungi Undang-Undang
          </p>
        </div>

        {/* Kolom Kanan */}
        <div className="flex flex-col justify-between">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-base font-semibold mb-2">Tentang Kami</p>
              <ul>
                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">Peta Situs</li>
                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">Syarat dan Ketentuan</li>
                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">Kebijakan Privasi</li>
              </ul>
            </div>

            <div>
              <p className="text-base font-semibold mb-2">Pusat Bantuan</p>
              <ul>
                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">FAQ</li>
                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">Kinerja</li>
                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">Struktur Organisasi</li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-start space-x-6 mt-8">
            <a href="https://instagram.com" className="text-white hover:text-gray-400">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/800px-Instagram_icon.png" alt="Instagram" className="h-8 w-8"/>
            </a>
            <a href="https://youtube.com" className="text-white hover:text-gray-400">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" alt="YouTube" className="h-8 w-8"/>
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-400">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1245px-Logo_of_Twitter.svg.png" alt="Twitter" className="h-8 w-8"/>
            </a>
            <a href="https://facebook.com" className="text-white hover:text-gray-400">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-8 w-8"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
