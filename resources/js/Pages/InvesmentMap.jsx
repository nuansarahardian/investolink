import React from "react";
import NavBar from "@/Components/NavBar";
import GeoMap from "@/Components/GeoMap";
<<<<<<< HEAD
import Chart from "@/Components/Chart";
import Footer from "@/Components/Footer";
import DataTable from "@/Components/DataTable";
=======
import Footer from "@/Components/Footer"; // Import the Footer component
>>>>>>> 4dd26507d0f4467da4678979f2f48cf3eec81a42
import "leaflet/dist/leaflet.css";

const InvesmentMap = () => {
    return (
        <>
<<<<<<< HEAD
            <NavBar></NavBar>
            <div className="bg-[#FAFAFA] h-[2000px]">
=======
            <NavBar />
            <div className="bg-[#FAFAFA] h-[1000px]">
>>>>>>> 4dd26507d0f4467da4678979f2f48cf3eec81a42
                <div className="flex flex-col justify-center align-middle place-content-center m-auto">
                    <div className="w-[95%] bg-white shadow h-full m-auto mt-10 rounded-[12px]">
                        <div className="w-[95%] m-auto mt-6 text-[#3F3F3F]">
                            <div className="font-bold text-2xl">
                                Potensi Ekonomi Per Provinsi
                            </div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quas, nulla?
                            </div>
                        </div>
                        <GeoMap />
                    </div>
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
                        <DataTable></DataTable>
                    </div>
                </div>
            </div>
<<<<<<< HEAD
            <Footer></Footer>
=======
            <Footer /> {/* Call the Footer component here */}
>>>>>>> 4dd26507d0f4467da4678979f2f48cf3eec81a42
        </>
    );
};

export default InvesmentMap;
