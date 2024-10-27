import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";
import ikonProvinsi from "../../../../../public/json/foto_ikonik_provinsi.json";
import LogoProvinsi from "../../../../../public/json/provinces.json";

const BannerProvinsi = () => {
    const { provinsi } = usePage().props || {};
    const [bgImageUrl, setBgImageUrl] = useState("/default-background.jpg");
    const [logoUrl, setLogoUrl] = useState("/default-logo.png");

    useEffect(() => {
        if (provinsi?.nama_provinsi) {
            const matchingProvinceIcon = ikonProvinsi.find(
                (p) =>
                    p?.Province &&
                    provinsi?.nama_provinsi &&
                    p.Province.toLowerCase() ===
                        provinsi.nama_provinsi.toLowerCase()
            );
            if (matchingProvinceIcon) {
                setBgImageUrl(matchingProvinceIcon.Image);
            } else {
                console.warn("Provinsi tidak ditemukan di JSON ikonProvinsi");
            }

            const matchingProvinceLogo = LogoProvinsi.find(
                (p) =>
                    p?.provinsi &&
                    provinsi?.nama_provinsi &&
                    p.provinsi.toLowerCase() ===
                        provinsi.nama_provinsi.toLowerCase()
            );
            if (matchingProvinceLogo) {
                setLogoUrl(matchingProvinceLogo.url_image);
            } else {
                console.warn(
                    "Logo provinsi tidak ditemukan di JSON LogoProvinsi"
                );
            }
        } else {
            console.warn("Nama provinsi tidak tersedia");
        }
    }, [provinsi]);

    const handleBack = () => {
        window.history.back();
    };

    return (
        <div
            className="w-full h-[320px] md:h-[400px] relative bg-cover"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.6)), url('${bgImageUrl}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="absolute inset-0 z-10 flex flex-col h-full justify-between pt-4 md:pt-[32px] px-4 md:pl-[48px] pb-4 md:pb-[24px]">
                {/* Back Button */}
                <button
                    onClick={handleBack}
                    className="flex items-center mb-4 md:mb-0"
                >
                    <img
                        src="/icon/back.png"
                        alt="Back"
                        className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] cursor-pointer"
                    />
                </button>

                <div className="flex flex-col text-white/80 md:text-white">
                    <img
                        src={logoUrl}
                        alt={`${provinsi?.nama_provinsi || "Logo"} Logo`}
                        className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] object-contain mb-4"
                    />
                    <p className="text-lg md:text-[40px] font-bold">
                        {provinsi?.nama_provinsi || "Provinsi Tidak Ditemukan"}
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4">
                        {/* Contact Information */}
                        <div className="flex items-center text-sm md:text-base">
                            <img
                                src="/icon/telepon.png"
                                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] mr-2"
                                alt="Telephone"
                            />
                            <p>
                                {provinsi?.nomor_handphone ||
                                    "Nomor telepon tidak tersedia"}
                            </p>
                        </div>
                        <div className="flex items-center text-sm md:text-base">
                            <img
                                src="/icon/web.png"
                                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] mr-2"
                                alt="Website"
                            />
                            <p>
                                {provinsi?.website || "Website tidak tersedia"}
                            </p>
                        </div>
                        <div className="flex items-center text-sm md:text-base">
                            <img
                                src="/icon/mail.png"
                                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] mr-2"
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
