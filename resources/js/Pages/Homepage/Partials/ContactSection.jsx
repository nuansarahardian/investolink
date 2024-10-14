import React from "react";
import ContactForm from "../../../Components/ContactForm"; // Impor ContactForm
import { withTranslation } from "react-google-multi-lang";

const ContactSection = () => {
    return (
        <section className="pt-12 bg-[#F0F3FF] mt-10">
            <div className="mx-auto px-4 lg:px-[48px]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Kolom Kiri: Informasi Kontak */}
                    <div className="lg:col-span-2 pr-24">
                        <h2 className="text-3xl font-bold text-[#2D3985] mb-4">
                            Kami Siap Membantu Anda
                        </h2>
                        <p className="text-gray-600 mb-6">
                            Hubungi kami jika Anda mengalami kendala atau
                            memiliki pertanyaan terkait investasi masuk dan
                            investasi keluar milik Indonesia. Pesan Anda
                            otomatis terkirim ke e-mail milik Kementerian Luar
                            Negeri Republik Indonesia dan akan dibalas maksimal
                            3x24 jam.
                        </p>
                    </div>
                    {/* Kolom Kanan: Form Kontak */}
                    <div className="lg:col-span-1">
                        <ContactForm /> {/* Memanggil komponen form */}
                    </div>
                </div>
            </div>
            <img
                src="images/tambahan.png"
                className="static -mt-48 w-[600px] mx-auto lg:mx-0"
                alt=""
            />
        </section>
    );
};

export default withTranslation(ContactSection);
