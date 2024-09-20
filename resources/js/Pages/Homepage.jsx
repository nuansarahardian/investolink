import React from "react";
import { Head } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import HeroSection from "@/Components/HeroSection"; // Impor komponen HeroSection
import InvestmentGallery from "@/Components/InvestmentGallery"; // Impor komponen InvestmentGallery
import ContactSection from "@/Components/ContactSection"; // Impor komponen ContactSection

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

            {/* Memanggil ContactSection */}
            <ContactSection />
        </>
    );
};

export default Homepage;
