import React from "react";

const ModalKawasanIndustri = ({ project }) => {
    console.log("Data project yang diterima:", project);

    // Pastikan project (kawasan yang dipilih) ada sebelum mengakses datanya
    if (!project || (Array.isArray(project) && project.length === 0)) {
        return (
            <div className="p-4">
                Tidak ada data kawasan industri yang tersedia.
            </div>
        );
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Daftar Kawasan Industri</h2>

            {/* Pembungkus untuk mengatur tinggi maksimal dan scroll */}
            <div className="overflow-hidden rounded-lg border-2 border-[#E7E6EA] max-h-[500px]">
                {/* Bagian ini untuk membatasi tinggi tabel dan membuatnya scroll */}
                <div className="overflow-y-auto max-h-[400px]">
                    <table className="min-w-full table-auto border-collapse bg-white rounded-md">
                        <thead className="bg-[#DFE3F6] sticky top-0 z-10 h-12">
                            <tr className="text-center border-b border-gray-300">
                                <th className="p-4 text-sm font-bold text-gray-700">
                                    No
                                </th>
                                <th className="p-4 text-sm font-bold text-gray-700">
                                    Nama Kawasan Industri
                                </th>
                                <th className="p-4 text-sm font-bold text-gray-700">
                                    Kabupaten/Kota
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {project.length > 0 ? (
                                project.map((kawasan, index) => (
                                    <tr
                                        key={index}
                                        className={`border-b ${
                                            index % 2 === 0
                                                ? "bg-white"
                                                : "bg-gray-100/50"
                                        } hover:bg-gray-300 transition-colors duration-200`}
                                    >
                                        <td className="p-4 text-center">
                                            {index + 1}
                                        </td>
                                        <td className="pl-16">
                                            {kawasan.nama_kawasan_industri ||
                                                "Tidak ada nama"}
                                        </td>
                                        <td className="pl-20 pr-10">
                                            {kawasan.kabupaten_atau_kota ||
                                                "Tidak ada data"}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="3"
                                        className="p-4 text-center text-gray-500"
                                    >
                                        Tidak ada data kawasan industri yang
                                        tersedia
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ModalKawasanIndustri;
