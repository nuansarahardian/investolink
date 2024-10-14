import React from "react";
import { withTranslation } from "react-google-multi-lang";

const ContactForm = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-black font-bold mb-2"
                    >
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border bg-[#F7F6F8] text-[#86858D] border-[#86858D] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Masukkan nama lengkap Anda"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-black font-bold mb-2"
                    >
                        E-mail
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border bg-[#F7F6F8] text-[#86858D] border-[#86858D] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Masukkan email aktif"
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="subject"
                        className="block text-black font-bold mb-2"
                    >
                        Subyek
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="w-full px-4 py-2 border bg-[#F7F6F8] text-[#86858D] border-[#86858D] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Masukkan subyek aduan..."
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-black font-bold mb-2"
                    >
                        Pesan
                    </label>
                    <textarea
                        id="message"
                        className="w-full px-4 py-2 border bg-[#F7F6F8] text-[#86858D] border-[#86858D] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        rows="4"
                        placeholder="Deskripsikan keluhan Anda..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#384AA0] text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-900"
                >
                    Kirim Pesan
                </button>
            </form>
        </div>
    );
};

export default withTranslation(ContactForm);
