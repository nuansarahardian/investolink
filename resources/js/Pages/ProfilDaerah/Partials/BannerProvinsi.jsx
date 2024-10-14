import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
// Mengimpor file JSON yang berisi gambar provinsi ikonik dan logo
import ikonProvinsi from "../../../../../public/json/foto_ikonik_provinsi.json";
import LogoProvinsi from "../../../../../public/json/provinces.json";

const BannerProvinsi = () => {
    const { provinsi } = usePage().props || {}; // Mengambil nama provinsi dari props
    const [bgImageUrl, setBgImageUrl] = useState("/default-background.jpg"); // Fallback default background image
    const [logoUrl, setLogoUrl] = useState("/default-logo.png"); // Fallback default logo

    useEffect(() => {
        // Hanya fetch data jika provinsi ada dan nama_provinsi tidak undefined atau null
        if (provinsi?.nama_provinsi) {
            // Mencari provinsi yang sesuai di ikonProvinsi JSON
            const matchingProvinceIcon = ikonProvinsi.find(
                (p) =>
                    p?.Province &&
                    provinsi?.nama_provinsi &&
                    p.Province.toLowerCase() ===
                        provinsi.nama_provinsi.toLowerCase()
            );
            if (matchingProvinceIcon) {
                setBgImageUrl(matchingProvinceIcon.Image); // Menyimpan URL gambar ikonik jika ditemukan
            } else {
                console.warn("Provinsi tidak ditemukan di JSON ikonProvinsi");
            }

            // Mencari provinsi yang sesuai di LogoProvinsi JSON
            const matchingProvinceLogo = LogoProvinsi.find(
                (p) =>
                    p?.provinsi &&
                    provinsi?.nama_provinsi &&
                    p.provinsi.toLowerCase() ===
                        provinsi.nama_provinsi.toLowerCase()
            );
            if (matchingProvinceLogo) {
                setLogoUrl(matchingProvinceLogo.url_image); // Menyimpan URL logo jika ditemukan
            } else {
                console.warn(
                    "Logo provinsi tidak ditemukan di JSON LogoProvinsi"
                );
            }
        } else {
            console.warn("Nama provinsi tidak tersedia");
        }
    }, [provinsi]);

    // Fungsi untuk navigasi kembali
    const handleBack = () => {
        window.history.back();
    };

    return (
        <div
            className="flex w-screen h-[320px] relative bg-cover"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.6)), url('${bgImageUrl}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="absolute inset-0 z-10 flex flex-col h-full justify-between pt-[32px] pl-[48px] pb-[24px]">
                {/* Tombol Back */}
                <button onClick={handleBack} className="flex items-center">
                    <img
                        src="/icon/back.png"
                        alt="Back"
                        className="w-[24px] cursor-pointer"
                    />
                </button>

                <div className="flex flex-col text-white/50">
                    <img
                        src={logoUrl}
                        alt={`${provinsi?.nama_provinsi || "Logo"} Logo`}
                        className="w-[80px] h-[80px] object-contain"
                    />
                    <div className="flex items-center gap-4">
                        {/* Menampilkan logo provinsi */}

                        <p className="text-white font-bold text-[40px]">
                            {provinsi?.nama_provinsi ||
                                "Provinsi Tidak Ditemukan"}
                        </p>
                    </div>
                    <div className="flex flex-row gap-6">
                        {/* Informasi Kontak */}
                        <div className="flex flex-row my-auto">
                            <img
                                src="/icon/telepon.png"
                                className="w-[24px] h-[24px] mr-2"
                                alt="Telephone"
                            />
                            <p>
                                {provinsi?.nomor_handphone ||
                                    "Nomor telepon tidak tersedia"}
                            </p>
                        </div>
                        <div className="flex flex-row my-auto">
                            <img
                                src="/icon/web.png"
                                className="w-[24px] h-[24px] mr-2"
                                alt="Website"
                            />
                            <p>
                                {provinsi?.website || "Website tidak tersedia"}
                            </p>
                        </div>
                        <div className="flex flex-row my-auto">
                            <img
                                src="/icon/mail.png"
                                className="w-[24px] h-[20px] mr-2"
                                alt="Email"
                            />
                            <p>{provinsi?.email || "Email tidak tersedia"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerProvinsi;
