import React, { useEffect, useState } from "react";
import iconData from "../../../public/json/icon.json";

const Footer = () => {
    const [icons, setIcons] = useState([]);

    // Mengambil data ikon dari icon.json
    useEffect(() => {
        setIcons(iconData.icon);
    }, []);

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-24">
                {/* Kolom Kiri */}
                <div className="flex flex-col items-start">
                    {/* Logo dan Nama */}
                    <div className="flex items-center mb-4">
                        <img
                            src="images/KEMLU RI.png"
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
                        <span className="mr-2 text-lg">
                            <img
                                className="w-5 mt-1"
                                src="icon/location.png"
                                alt="Location"
                            />
                        </span>
                        <p className="text-base">
                            <span className="font-bold text-[14px]">
                                Gedung Roeslan Abdulgani Kementerian Luar Negeri
                                RI.
                            </span>
                            <br />
                            <span className="font-reguler text-[14px]">
                                Jl. Taman Pejambon No. 6, Senen, Jakarta Pusat,
                                DKI Jakarta, 10410
                            </span>
                        </p>
                    </div>

                    {/* Jam Operasional */}
                    <div className="flex items-start mb-4">
                        <span className="mr-2 text-lg">
                            <img
                                className="w-5 "
                                src="icon/clock.png"
                                alt="Clock"
                            />
                        </span>
                        <p className="font-base text-[14px]">
                            08.00 - 16.00 (Senin-Kamis) | 08.00 - 16.30 (Jum'at)
                        </p>
                    </div>

                    {/* Nomor Telepon */}
                    <div className="flex align-items-center items-start mb-4">
                        <span className="mr-2 text-lg">
                            <img
                                className="w-5 "
                                src="icon/phone.png"
                                alt="Phone"
                            />
                        </span>
                        <p className="font-base text-[14px]">(021) 344 1508</p>
                    </div>

                    {/* Hak Cipta */}
                    <p className="text-base mt-6">
                        © 2024 <span className="font-semibold">BSKLN</span> dan{" "}
                        <span className="font-semibold">TPPE</span>. Hak cipta
                        dilindungi Undang-Undang
                    </p>
                </div>

                {/* Kolom Kanan */}
                <div className="flex flex-col justify-between">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <p className="text-base font-semibold mb-2">
                                Tentang Kami
                            </p>
                            <ul>
                                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">
                                    Peta Situs
                                </li>
                                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">
                                    Syarat dan Ketentuan
                                </li>
                                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">
                                    Kebijakan Privasi
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base font-semibold mb-2">
                                Pusat Bantuan
                            </p>
                            <ul>
                                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">
                                    FAQ
                                </li>
                                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">
                                    Kinerja
                                </li>
                                <li className="text-base mb-2 hover:text-gray-300 cursor-pointer">
                                    Struktur Organisasi
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="flex justify-start space-x-6 mt-8">
                        {icons.map((icon, index) => (
                            <a
                                key={index}
                                href={icon.url || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={icon.img}
                                    alt={`icon-${index}`}
                                    className="w-8 h-8"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
