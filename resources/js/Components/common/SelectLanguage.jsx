import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-google-multi-lang";
import { useState, useEffect } from "react";

export default function Dropdown() {
    const { setLanguage } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState("id");

    // Mengambil data dari localStorage saat komponen dimuat
    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            setCurrentLanguage(savedLanguage);
            setLanguage(savedLanguage);
        }
    }, [setLanguage]);

    // Fungsi untuk mengubah bahasa dan memperbarui state bahasa aktif
    const changeLanguage = (lang) => {
        setLanguage(lang);
        setCurrentLanguage(lang);
        localStorage.setItem("language", lang);
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

    const { label, icon } = getLanguageDetails(currentLanguage);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-[#384AA0] px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-[#283579]">
                    <div className="flex items-center mr-1">
                        <img
                            src={icon}
                            className="w-6 h-6 rounded-full"
                            alt={label}
                        />
                    </div>
                    <div className="text-sm font-medium text-white hidden sm:block">
                        {label}
                    </div>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-white"
                    />
                </MenuButton>
            </div>

            <Menu.Items className="absolute right-0 z-10 mt-2 min-w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => changeLanguage("id")}
                                className={`flex items-center w-full px-4 py-2 text-sm ${
                                    active ? "bg-gray-100" : ""
                                } text-gray-700 hover:bg-gray-100`}
                            >
                                <img
                                    src="/images/indo.png"
                                    alt="Bahasa Indonesia"
                                    className="w-5 h-5 mr-3 rounded-full"
                                />
                                <span>Bahasa Indonesia</span>
                            </button>
                        )}
                    </Menu.Item>

                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => changeLanguage("en")}
                                className={`flex items-center w-full px-4 py-2 text-sm ${
                                    active ? "bg-gray-100" : ""
                                } text-gray-700 hover:bg-gray-100`}
                            >
                                <img
                                    src="/images/UK.png"
                                    alt="English"
                                    className="w-5 h-5 mr-3 rounded-full"
                                />
                                <span>English</span>
                            </button>
                        )}
                    </Menu.Item>

                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={() => changeLanguage("ar")}
                                className={`flex items-center w-full px-4 py-2 text-sm ${
                                    active ? "bg-gray-100" : ""
                                } text-gray-700 hover:bg-gray-100`}
                            >
                                <img
                                    src="/images/arab.jpg"
                                    alt="Arabic"
                                    className="w-5 h-5 mr-3 rounded-full"
                                />
                                <span>Arabic</span>
                            </button>
                        )}
                    </Menu.Item>
                </div>
            </Menu.Items>
        </Menu>
    );
}
