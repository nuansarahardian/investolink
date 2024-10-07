import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/react";

const BannerProvinsi = () => {
    const { provinsi } = usePage().props || {}; // Mengambil nama provinsi dari props, tambahkan fallback jika tidak tersedia
    const [logoUrl, setLogoUrl] = useState("");

    useEffect(() => {
        // Hanya fetch data jika provinsi ada
        if (provinsi?.nama_provinsi) {
            const fetchProvincesData = async () => {
                try {
                    const response = await fetch("/json/provinces.json"); // Meminta file JSON
                    const data = await response.json();
                    // Mencari provinsi yang sesuai di JSON
                    const matchingProvince = data.find(
                        (p) =>
                            p.provinsi.toLowerCase() ===
                            provinsi.nama_provinsi.toLowerCase()
                    );
                    if (matchingProvince) {
                        setLogoUrl(matchingProvince.url_image); // Menyimpan URL gambar logo jika ditemukan
                    } else {
                        console.warn("Provinsi tidak ditemukan di JSON");
                    }
                } catch (error) {
                    console.error("Gagal memuat data provinsi:", error);
                }
            };

            fetchProvincesData(); // Panggil fungsi untuk mengambil data provinsi
        }
    }, [provinsi]);

    // Fungsi untuk navigasi kembali
    const handleBack = () => {
        window.history.back();
    };

    return (
        <div
            className="flex w-screen h-[300px] relative bg-cover"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.6)), url('/gedung_ikonik/jawatimur.jpg')`,
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
                    <div>
                        {/* Tampilkan logo jika ditemukan */}
                        {logoUrl ? (
                            <img
                                src={logoUrl}
                                className="w-16 mb-2"
                                alt={`Logo ${provinsi?.nama_provinsi}`}
                            />
                        ) : (
                            <p>Logo tidak tersedia</p> // Jika logo tidak ditemukan
                        )}
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
                            <p>(061) 4156000</p>
                        </div>
                        <div className="flex flex-row my-auto">
                            <img
                                src="/icon/web.png"
                                className="w-[24px] h-[24px] mr-2"
                                alt="Website"
                            />
                            <p>https://www.sumutprov.go.id</p>
                        </div>
                        <div className="flex flex-row my-auto">
                            <img
                                src="/icon/mail.png"
                                className="w-[24px] h-[20px] mr-2"
                                alt="Email"
                            />
                            <p>info@sumutprov.go.id</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerProvinsi;
