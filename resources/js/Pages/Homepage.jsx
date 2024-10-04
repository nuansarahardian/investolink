import React from "react";
import { Head } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import HeroSection from "@/Components/HeroSection"; // Impor komponen HeroSection
import InvestmentGallery from "@/Components/InvestmentGallery"; // Impor komponen InvestmentGallery
import ContactSection from "@/Components/ContactSection"; // Impor komponen ContactSection
import Footer from "@/Components/Footer"; // Impor komponen Footer
import BrandSlider from "@/Components/BrandSlider"; // Impor komponen Footer
import Card from "../Components/Card";
// Impor komponen Footer
import { Button } from "@/Components/ui/button";
import { Slider } from "@material-tailwind/react";

const Homepage = () => {
    return (
        <>
            {/* Inertia.js Head Component to set the page title */}
            <Head title="Homepage" />
            <NavBar />

            {/* Memanggil HeroSection */}
            <HeroSection />

            {/* Memanggil InvestmentGallery */}
            <InvestmentGallery />
            <div className="flex flex-col mt-6 ">
                <div className="flex flex-col m-auto mb-8 text-slate-800 ">
                    <div className="m-auto text-3xl font-medium ">
                        Situs Terkait
                    </div>
                    <div>
                        Pastikan anda tetap terhubung dengan data ekonomi
                        terbaru melalui situs-situs mitra BSKLN
                    </div>
                </div>

                <BrandSlider className="" />
            </div>

            {/* Memanggil ContactSection */}
            <ContactSection />

            {/* Memanggil Footer di bagian bawah halaman */}

            <Footer />
            <Card></Card>
            
        </>
    );
};

export default Homepage;
