import React, { useState } from "react";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";
import { withTranslation } from "react-google-multi-lang";

const ProvinceTable = () => {
    const { provinsi } = usePage().props;

    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState("nama_provinsi");
    const [isAscending, setIsAscending] = useState(true);

    const filteredData = provinsi
        .filter((item) =>
            item.nama_provinsi.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortColumn === "nama_provinsi") {
                return isAscending
                    ? a.nama_provinsi.localeCompare(b.nama_provinsi)
                    : b.nama_provinsi.localeCompare(a.nama_provinsi);
            } else if (sortColumn === "jumlah_kawasan_industri") {
                return isAscending
                    ? a.jumlah_kawasan_industri - b.jumlah_kawasan_industri
                    : b.jumlah_kawasan_industri - a.jumlah_kawasan_industri;
            } else if (sortColumn === "jumlah_kawasan_ekonomi_khusus") {
                return isAscending
                    ? a.jumlah_kawasan_ekonomi_khusus -
                          b.jumlah_kawasan_ekonomi_khusus
                    : b.jumlah_kawasan_ekonomi_khusus -
                          a.jumlah_kawasan_ekonomi_khusus;
            }
            return 0;
        });

    const handleSort = (column) => {
        if (sortColumn === column) {
            setIsAscending(!isAscending);
        } else {
            setSortColumn(column);
            setIsAscending(true);
        }
    };

    return (
        <div className="w-full p-4">
            {/* Header tabel (sorting, search, dan total count) */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-auto">
                    <p className="font-medium text-slate-800 text-lg">
                        Menampilkan {filteredData.length} Provinsi
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:space-x-2 w-full lg:w-[60%] md:w-[70%] space-y-4 sm:space-y-0">
                    {/* Sorting dropdown */}
                    <div className="w-full md:w-[50%] lg:w-[40%] flex flex-row items-center">
                        <p className="text-[14px] font-normal text-[#86858D] min-w-max mr-4">
                            Urutkan Berdasarkan
                        </p>
                        <select
                            className="flex flex-col sm:flex-row border p-2 rounded-[6px] text-[#86858D] bg-[#F7F6F8] focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                            value={sortColumn}
                            onChange={(e) => handleSort(e.target.value)}
                        >
                            <option value="nama_provinsi">Nama Provinsi</option>
                            <option value="jumlah_kawasan_industri">
                                Kawasan Industri
                            </option>
                            <option value="jumlah_kawasan_ekonomi_khusus">
                                KEK
                            </option>
                        </select>
                    </div>

                    {/* Input pencarian */}
                    <div className="w-full md:w-[50%] lg:w-[60%] items-center flex flex-col sm:flex-row">
                        <input
                            type="text"
                            className="border p-2 rounded-[6px] text-[#86858D] bg-[#F7F6F8] focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                            placeholder="Cari Nama Provinsi"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Tabel scrollable */}
            <div className="overflow-x-auto overflow-y-auto max-h-96 rounded-xl border border-gray-300 shadow-sm custom-scrollbar">
                <table className="min-w-full table-auto border-collapse bg-white">
                    <thead className="bg-[#DFE3F6] sticky top-0 z-10 h-12">
                        <tr className="text-center border-b border-gray-300">
                            <th className="p-4 text-sm font-bold text-gray-700">
                                No
                            </th>
                            <th
                                className="p-4 text-sm font-bold text-gray-700 cursor-pointer"
                                onClick={() => handleSort("nama_provinsi")}
                            >
                                <div className="flex justify-center align-middle place-items-center">
                                    Nama Provinsi
                                    {sortColumn === "nama_provinsi" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="gray"
                                            viewBox="0 0 24 24"
                                            className={`w-4 h-4 ml-2 my-auto transition-transform duration-300 ${
                                                isAscending
                                                    ? "rotate-0"
                                                    : "rotate-180"
                                            }`}
                                        >
                                            <path
                                                strokeWidth={5}
                                                d="M5 15l7-7 7 7"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </th>
                            <th
                                className="p-4 place-content-center text-sm font-bold text-gray-700 cursor-pointer"
                                onClick={() =>
                                    handleSort("jumlah_kawasan_industri")
                                }
                            >
                                <div className="flex justify-center align-middle place-items-center">
                                    Jumlah Kawasan Industri
                                    {sortColumn ===
                                        "jumlah_kawasan_industri" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="gray"
                                            viewBox="0 0 24 24"
                                            className={`w-4 h-4 ml-2 my-auto transition-transform duration-300 ${
                                                isAscending
                                                    ? "rotate-0"
                                                    : "rotate-180"
                                            }`}
                                        >
                                            <path
                                                strokeWidth={5}
                                                d="M5 15l7-7 7 7"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </th>
                            <th
                                className="p-4 flex place-content-center text-sm font-bold text-gray-700 cursor-pointer"
                                onClick={() =>
                                    handleSort("jumlah_kawasan_ekonomi_khusus")
                                }
                            >
                                <div className="flex justify-center align-middle place-items-center">
                                    Jumlah KEK
                                    {sortColumn ===
                                        "jumlah_kawasan_ekonomi_khusus" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="gray"
                                            viewBox="0 0 24 24"
                                            className={`w-4 h-4 ml-2 my-auto transition-transform duration-300 ${
                                                isAscending
                                                    ? "rotate-0"
                                                    : "rotate-180"
                                            }`}
                                        >
                                            <path
                                                strokeWidth={5}
                                                d="M5 15l7-7 7 7"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </th>
                            <th className="p-4 text-sm font-bold text-gray-700">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr
                                key={row.provinsi_id}
                                className={`border-t border-gray-300 transition duration-200 ${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                } hover:bg-blue-50`}
                            >
                                <td className="p-4 text-sm text-gray-600 text-center">
                                    {index + 1}
                                </td>
                                <td className="p-4 text-sm text-gray-600 text-center">
                                    {row.nama_provinsi}
                                </td>
                                <td className="p-4 text-sm text-gray-600 text-center">
                                    {row.jumlah_kawasan_industri}
                                </td>
                                <td className="p-4 text-sm text-gray-600 text-center">
                                    {row.jumlah_kawasan_ekonomi_khusus}
                                </td>
                                <td className="p-4 text-sm text-gray-600 text-center">
                                    <Link
                                        className="border border-[#A5B1E8] bg-[#F0F3FF] text-[#2D3985] m-auto w-fit py-1 px-4 rounded-lg hover:bg-[#a7b9ff] transition duration-300 ease-in-out flex items-center"
                                        href={`/provinsi/${row.provinsi_id}`}
                                    >
                                        <div className="flex">
                                            <p className="font-bold mr-2">
                                                Lihat Detail
                                            </p>
                                            <img
                                                src="/icon/Vector.png"
                                                alt="icon"
                                                className="w-4 h-4 my-auto mr-2"
                                            />
                                        </div>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default withTranslation(ProvinceTable);
