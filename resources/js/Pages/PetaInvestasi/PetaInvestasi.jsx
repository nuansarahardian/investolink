import React from "react";
import NavBar from "@/Components/layout/NavBar";

import Title from "@/Pages/Homepage/Partials/Title";
import Chart from "@/Components/Chart";
import Footer from "@/Components/layout/Footer";
import ProfilInvestasi from "@/Components/ProfilInvestasi";
import PetaPotensiEkonomi from "@/Pages/PetaInvestasi/Partials/PetaPotensiEkonomi";
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
                    <div className="w-[95%] bg-white shadow h-full m-auto mt-10 rounded-[12px]">
                        <div className="w-[95%] m-auto mt-6 text-[#3F3F3F]">
                            <div className="font-bold text-2xl ">PDB</div>
                            <div>
                                Grafik pertumbuhan PDB tahun 2019-2023 dan
                                proyeksinya untuk tahun 2024-2028
                            </div>
                        </div>
                        <Chart />
                    </div>
                    <div className="w-[95%] bg-white shadow h-full m-auto mt-10 rounded-[12px]">
                        <div className="w-[95%] m-auto mt-6 text-[#3F3F3F]">
                            <div className="font-bold text-2xl ">
                                Profil Investasi
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
