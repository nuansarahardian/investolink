import React from "react";
import { Head } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import HeroSection from "@/Components/HeroSection"; // Impor komponen HeroSection
import InvestmentGallery from "@/Components/InvestmentGallery"; // Impor komponen InvestmentGallery
import ContactSection from "@/Components/ContactSection"; // Impor komponen ContactSection
import Footer from "@/Components/Footer"; // Impor komponen Footer

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

            {/* Memanggil Footer di bagian bawah halaman */}
            <Footer />
        </>
    );
};

export default Homepage;
