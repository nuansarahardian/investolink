import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

const ContactForm = () => {
    const [form, setForm] = useState({
        nama_lengkap: "",
        email: "",
        no_handphone: "",
        subyek: "",
        isi_aduan: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post("/aduan/create", form, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                setForm({
                    nama_lengkap: "",
                    email: "",
                    no_handphone: "",
                    subyek: "",
                    isi_aduan: "",
                });
                // Trigger fetch ulang data di tabel
                Inertia.reload({ only: ["aduan"] });
            },
        });
    };

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="nama_lengkap"
                        className="block text-black font-bold mb-2"
                    >
                        Nama Lengkap
                    </label>
                    <input
                        type="text"
                        id="nama_lengkap"
                        name="nama_lengkap"
                        className="w-full px-4 py-2 border bg-[#F7F6F8] text-[#86858D] border-[#86858D] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Masukkan nama lengkap Anda"
                        value={form.nama_lengkap}
                        onChange={handleChange}
                        required
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
                        name="email"
                        className="w-full px-4 py-2 border bg-[#F7F6F8] text-[#86858D] border-[#86858D] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Masukkan email aktif"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label
                        htmlFor="no_handphone"
                        className="block text-black font-bold mb-2"
                    >
                        Nomor Handphone
                    </label>
                    <input
                        type="text"
                        id="no_handphone"
                        name="no_handphone"
                        className="w-full px-4 py-2 border bg-[#F7F6F8] text-[#86858D] border-[#86858D] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Masukkan email aktif"
                        value={form.no_handphone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="subyek"
                        className="block text-black font-bold mb-2"
                    >
                        Subyek
                    </label>
                    <input
                        type="text"
                        id="subyek"
                        name="subyek"
                        className="w-full px-4 py-2 border bg-[#F7F6F8] text-[#86858D] border-[#86858D] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        placeholder="Masukkan subyek aduan..."
                        value={form.subyek}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="isi_aduan"
                        className="block text-black font-bold mb-2"
                    >
                        Pesan
                    </label>
                    <textarea
                        id="isi_aduan"
                        name="isi_aduan"
                        className="w-full px-4 py-2 border bg-[#F7F6F8] text-[#86858D] border-[#86858D] rounded-lg focus:outline-none focus:ring focus:ring-indigo-200"
                        rows="4"
                        placeholder="Deskripsikan keluhan Anda..."
                        value={form.isi_aduan}
                        onChange={handleChange}
                        required
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

export default ContactForm;
