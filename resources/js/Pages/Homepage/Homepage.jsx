import React, { useRef } from "react";
import { Head, usePage } from "@inertiajs/react";
import { motion, useInView } from "framer-motion";
import NavBar from "@/Components/layout/NavBar";
import HeroSection from "@/Pages/Homepage/Partials/HeroSection";
import InvestmentGallery from "@/Pages/Homepage/Partials/InvestmentGallery";
import Title from "@/Pages/Homepage/Partials/Title";
import SitusTerkait from "@/Pages/Homepage/Partials/SitusTerkait";
import ContactSection from "@/Pages/Homepage/Partials/ContactSection";
import Footer from "@/Components/layout/Footer";

const Homepage = () => {
    const { props } = usePage();
    const alert = props.flash?.success;


    // Define animation settings
    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    // Refs for each section to use with useInView
    const heroRef = useRef(null);
    const investmentRef = useRef(null);
    const titleRef = useRef(null);
    const situsRef = useRef(null);
    const contactRef = useRef(null);

    // Check if each section is in view
    const isHeroInView = useInView(heroRef, { triggerOnce: true });
    const isInvestmentInView = useInView(investmentRef, { triggerOnce: true });
    const isTitleInView = useInView(titleRef, { triggerOnce: true });
    const isSitusInView = useInView(situsRef, { triggerOnce: true });
    const isContactInView = useInView(contactRef, { triggerOnce: true });

    return (
        <>
            <Head title="Homepage" />
            <NavBar />

            {/* Hero Section */}
            <motion.div
                ref={heroRef}
                initial="hidden"
                animate={isHeroInView ? "visible" : "hidden"}
                transition={{ duration: 0.6 }}
                variants={fadeIn}
            >
                <HeroSection />
            </motion.div>

            {/* Investment Gallery */}
            <motion.div
                ref={investmentRef}
                initial="hidden"
                animate={isInvestmentInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.1 }}
                variants={fadeIn}
            >
                <InvestmentGallery />
            </motion.div>

            <div className="flex flex-col mt-6">
                {/* Title */}
                <motion.div
                    ref={titleRef}
                    initial="hidden"
                    animate={isTitleInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    variants={fadeIn}
                >
                    <Title />
                </motion.div>

                {/* Situs Terkait */}
                <motion.div
                    ref={situsRef}
                    initial="hidden"
                    animate={isSitusInView ? "visible" : "hidden"}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    variants={fadeIn}
                >
                    <SitusTerkait />
                </motion.div>
            </div>

            {/* Contact Section */}
            <motion.div
                ref={contactRef}
                initial="hidden"
                animate={isContactInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay: 0.4 }}
                variants={fadeIn}
            >
                <ContactSection />
            </motion.div>

            <Footer />
        </>
    );
};

export default Homepage;
