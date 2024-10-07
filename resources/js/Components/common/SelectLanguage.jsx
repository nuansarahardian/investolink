import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-google-multi-lang";
import { useState, useEffect } from "react";

export default function Dropdown() {
    const { setLanguage } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState("id");

    // Mengambil data dari localStorage saat komponen dimuat
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language"); // Ambil bahasa yang tersimpan
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage); // Set bahasa dari localStorage jika ada
            setLanguage(savedLanguage); // Ubah bahasa menggunakan setLanguage dari react-google-multi-lang
        }
    }, [setLanguage]);

    // Fungsi untuk mengubah bahasa dan memperbarui state bahasa aktif
    const changeLanguage = (lang) => {
        setLanguage(lang); // Ubah bahasa menggunakan setLanguage dari react-google-multi-lang
        setCurrentLanguage(lang); // Perbarui state bahasa aktif
        localStorage.setItem("language", lang); // Simpan bahasa ke localStorage
    };

    // Fungsi untuk menentukan label dan ikon berdasarkan bahasa yang aktif
    const getLanguageDetails = (lang) => {
        switch (lang) {
            case "id":
                return { label: "Bahasa Indonesia", icon: "/images/indo.png" };
            case "en":
                return { label: "English", icon: "/images/UK.png" };
            case "ar":
                return { label: "Arabic", icon: "/images/arab.jpg" };
            default:
                return { label: "Bahasa Indonesia", icon: "/images/indo.png" }; // Default ke Bahasa Indonesia
        }
    };

    const { label, icon } = getLanguageDetails(currentLanguage); // Tentukan label dan ikon bahasa aktif

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full place-items-center justify-center gap-x-1.5 rounded-md bg-[#384AA0] px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#283579]">
                    <div className="flex align-middle drop-shadow-md rounded-xl mr-1">
                        <div className="">
                            <img
                                src={icon} // Tampilkan ikon sesuai bahasa aktif
                                className="w-6 h-6 rounded-full"
                                alt={label}
                            />
                        </div>
                    </div>
                    <div className="sm:text-sm font-medium sm:block hidden text-white">
                        {label} {/* Tampilkan label sesuai bahasa aktif */}
                    </div>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-white"
                    />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
            >
                <div className="py-1">
                    <MenuItem>
                        <button
                            onClick={() => changeLanguage("id")} // Ubah bahasa ke Indonesia
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            <div className="flex place-items-center">
                                <div className="w-10 my-auto rounded-full drop-shadow-lg">
                                    <img
                                        className="w-6 h-6 rounded-full"
                                        src="/images/indo.png"
                                        alt="Bahasa Indonesia"
                                    />
                                </div>
                                Bahasa Indonesia
                            </div>
                        </button>
                    </MenuItem>

                    <MenuItem>
                        <button
                            onClick={() => changeLanguage("en")} // Ubah bahasa ke Inggris
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            <div className="flex">
                                <div className="w-10 rounded-full drop-shadow-lg">
                                    <img
                                        className="w-6 h-6 rounded-full"
                                        src="/images/UK.png"
                                        alt="English"
                                    />
                                </div>
                                English
                            </div>
                        </button>
                    </MenuItem>
                    <MenuItem>
                        <button
                            onClick={() => changeLanguage("ar")} // Ubah bahasa ke Arab
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                        >
                            <div className="flex">
                                <div className="w-10 rounded-full drop-shadow-lg">
                                    <img
                                        className="w-6 h-6 rounded-full"
                                        src="/images/arab.jpg"
                                        alt="Arabic"
                                    />
                                </div>
                                Arab
                            </div>
                        </button>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
}
