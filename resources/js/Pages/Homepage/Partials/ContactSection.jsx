import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import ContactForm from "../../../Components/ContactForm";

const ContactSection = () => {
    const { props } = usePage();
    const [showAlert, setShowAlert] = useState(props.flash?.success);

    const handleCloseAlert = () => {
        setShowAlert(null);
    };

    return (
        <section className="pt-12 bg-[#F0F3FF] mt-10">
            <div className="mx-auto px-4 sm:px-6 lg:px-12 max-w-screen-xl">
                {showAlert && (
                    <div className="mb-4 p-4 bg-green-500 text-white rounded relative">
                        <span>{showAlert}</span>
                        <button
                            onClick={handleCloseAlert}
                            className="absolute top-2 right-2 text-white hover:text-gray-300 size-10"
                        >
                            &times;
                        </button>
                    </div>
                )}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Contact Information */}
                    <div className="lg:col-span-2 lg:pr-24">
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3985] mb-4">
                            Kami Siap Membantu Anda
                        </h2>
                        <p className="text-gray-600 mb-6 text-sm sm:text-base">
                            Hubungi kami jika Anda mengalami kendala atau
                            memiliki pertanyaan terkait investasi masuk dan
                            investasi keluar milik Indonesia. Pesan Anda
                            otomatis terkirim ke e-mail milik Kementerian Luar
                            Negeri Republik Indonesia dan akan dibalas maksimal
                            3x24 jam.
                        </p>
                    </div>
                    {/* Right Column: Contact Form */}
                    <div className="lg:col-span-1">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className="flex justify-center lg:justify-start">
                <img
                    src="images/tambahan.png"
                    className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] mt-6 lg:-mt-48"
                    alt="Tambahan"
                />
            </div>
        </section>
    );
};

export default ContactSection;
