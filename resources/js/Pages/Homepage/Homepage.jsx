import React from "react";
import { Head } from "@inertiajs/react";
import NavBar from "@/Components/layout/NavBar";
import HeroSection from "@/Pages/Homepage/Partials/HeroSection";
import InvestmentGallery from "@/Pages/Homepage/Partials/InvestmentGallery";
import Title from "@/Pages/Homepage/Partials/Title";
import SitusTerkait from "@/Pages/Homepage/Partials/SitusTerkait";
import ContactSection from "@/Pages/Homepage/Partials/ContactSection";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import MyComponent from "@/Components/MyComponent";
import Footer from "@/Components/layout/Footer";

const Homepage = () => {
    return (
        <>
            <Head title="Homepage" />

            <NavBar />

            {/* Tambahkan TranslatePage di sini */}

            <HeroSection />
            <InvestmentGallery />

            <div className="flex flex-col mt-6 ">
                <Title></Title>
                <SitusTerkait />
            </div>

            <ContactSection />
            <Footer />
        </>
    );
};

export default Homepage;
