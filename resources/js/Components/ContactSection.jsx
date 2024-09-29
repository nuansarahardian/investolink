import React from "react";
import ContactForm from "./ContactForm"; // Impor ContactForm

const ContactSection = () => {
    return (
        <section className="pt-12 bg-[#F0F3FF] mt-10">
            <div className="container mx-auto px-4 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Kolom Kiri: Informasi Kontak */}
                    <div className=" mr">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
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
                    <ContactForm className="h-full" />{" "}
                    {/* Memanggil komponen form */}
                </div>
            </div>
            <img
                src="images/tambahan.png"
                className="static -mt-48 w-[600px]"
                alt=""
            />
        </section>
    );
};

export default ContactSection;
