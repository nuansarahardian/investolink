import React from "react";
import NavBar from "@/Components/NavBar";
import GeoMap from "@/Components/GeoMap";
import Footer from "@/Components/Footer"; // Import the Footer component
import "leaflet/dist/leaflet.css";

const InvesmentMap = () => {
    return (
        <>
            <NavBar />
            <div className="bg-[#FAFAFA] h-[1000px]">
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
                </div>
            </div>
            <Footer /> {/* Call the Footer component here */}
        </>
    );
};

export default InvesmentMap;
