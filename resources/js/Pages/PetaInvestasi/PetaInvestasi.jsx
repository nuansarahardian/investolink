import React from "react";
import NavBar from "@/Components/layout/NavBar";

import Title from "@/Pages/Homepage/Partials/Title";

import Footer from "@/Components/layout/Footer";
import ProfilInvestasi from "@/Components/ProfilInvestasi";
import PetaPotensiEkonomi from "@/Pages/PetaInvestasi/Partials/PetaPotensiEkonomi";
import Statistik from "@/Pages/PetaInvestasi/Partials/Statistik";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import MyComponent from "@/Components/MyComponent";
import "leaflet/dist/leaflet.css";
import { withTranslation } from "react-google-multi-lang";

const PetaInvestasi = () => {
    return (
        <>
            <NavBar></NavBar>

            <div className="bg-[#FAFAFA] h-fit pb-12">
                <div className="flex flex-col justify-center align-middle place-content-center m-auto">
                    <PetaPotensiEkonomi></PetaPotensiEkonomi>
                    <Statistik></Statistik>

                    <div className="w-[95%] bg-white shadow h-full m-auto mt-10 rounded-[12px]">
                        <div className="w-full p-[32px] m-auto  text-[#3F3F3F] ">
                            <div className="flex">
                                <img
                                    src="/icon/Icon.png"
                                    className="h-[48px] mr-4"
                                    alt=""
                                />

                                <div className="flex  flex-col my-auto">
                                    {" "}
                                    <p className="font-bold text-xl text-[#2D3985] ">
                                        Profil Investasi
                                    </p>
                                    <p className="text-sm text-[#86858D]">
                                        {" "}
                                        Dapatkan wawasan yang beragam terkait
                                        peluang investasi di indonesia
                                        berdasarkan provinsi. sektor, dan
                                        komoditas
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ProfilInvestasi />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default withTranslation(PetaInvestasi);
