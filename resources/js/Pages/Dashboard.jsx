import React from "react";
import { Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia"; // Perbaikan: Import Inertia dari @inertiajs/inertia
import { format } from "date-fns";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Dashboard({ aduan }) {
    const handleCheckboxChange = (id, isSolved) => {
        // Kirim permintaan ke backend untuk mengubah status is_solved
        Inertia.post(`/aduan/${id}/toggle-solved`, {
            is_solved: !isSolved,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="container mx-auto px-4 py-6">
                            <h1 className="text-2xl font-bold mb-4">
                                Daftar Aduan
                            </h1>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200">
                                    <thead>
                                        <tr className="bg-gray-100 text-left">
                                            <th className="py-3 px-4 border-b">
                                                #
                                            </th>
                                            <th className="py-3 px-4 border-b">
                                                ID
                                            </th>
                                            <th className="py-3 px-4 border-b">
                                                Nama Lengkap
                                            </th>
                                            <th className="py-3 px-4 border-b">
                                                Email
                                            </th>
                                            <th className="py-3 px-4 border-b">
                                                No. Handphone
                                            </th>
                                            <th className="py-3 px-4 border-b">
                                                Subyek
                                            </th>
                                            <th className="py-3 px-4 border-b">
                                                Pesan
                                            </th>
                                            <th className="py-3 px-4 border-b">
                                                Tanggal
                                            </th>
                                            <th className="py-3 px-4 border-b">
                                                Solved
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {aduan.map((item) => (
                                            <tr
                                                key={item.id}
                                                className="hover:bg-gray-50"
                                            >
                                                <td className="py-3 px-4 border-b">
                                                    <input
                                                        type="checkbox"
                                                        checked={item.is_solved}
                                                        onChange={() =>
                                                            handleCheckboxChange(
                                                                item.id,
                                                                item.is_solved
                                                            )
                                                        }
                                                    />
                                                </td>
                                                <td className="py-3 px-4 border-b">
                                                    {item.id}
                                                </td>
                                                <td className="py-3 px-4 border-b">
                                                    {item.nama_lengkap}
                                                </td>
                                                <td className="py-3 px-4 border-b">
                                                    {item.email}
                                                </td>
                                                <td className="py-3 px-4 border-b">
                                                    {item.no_handphone}
                                                </td>
                                                <td className="py-3 px-4 border-b">
                                                    {item.subyek}
                                                </td>
                                                <td className="py-3 px-4 border-b">
                                                    {item.isi_aduan}
                                                </td>
                                                <td className="py-3 px-4 border-b">
                                                    {format(
                                                        new Date(
                                                            item.created_at
                                                        ),
                                                        "dd/MM/yyyy HH:mm:ss"
                                                    )}
                                                </td>
                                                <td className="py-3 px-4 border-b">
                                                    {item.is_solved
                                                        ? "Yes"
                                                        : "No"}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
