import React, { useState, useEffect } from "react";

const DataTable = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState("provinsi");
    const [isAscending, setIsAscending] = useState(true);

    useEffect(() => {
        // Fetch provinces from the local JSON file
        fetch("json/provinces.json")
            .then((response) => response.json())
            .then((json) => {
                // Prepare data with static data points
                const enrichedData = json.map((provinsi) => ({
                    provinsi: provinsi.nama,
                    kawasanIndustri: Math.floor(Math.random() * 50), // Random data
                    kek: Math.floor(Math.random() * 5), // Random data
                }));
                setData(enrichedData);
            })
            .catch((error) => {
                console.error("Error fetching province data:", error);
            });
    }, []);

    // Filter and sort data based on search term and sort order
    const filteredData = data
        .filter((item) =>
            item.provinsi.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
            if (sortColumn === "provinsi") {
                return isAscending
                    ? a.provinsi.localeCompare(b.provinsi)
                    : b.provinsi.localeCompare(a.provinsi);
            } else if (sortColumn === "kawasanIndustri") {
                return isAscending
                    ? a.kawasanIndustri - b.kawasanIndustri
                    : b.kawasanIndustri - a.kawasanIndustri;
            } else if (sortColumn === "kek") {
                return isAscending ? a.kek - b.kek : b.kek - a.kek;
            }
            return 0;
        });

    const handleDetailClick = (provinsiName) => {
        alert(`You clicked on details for: ${provinsiName}`);
    };

    const handleSort = (column) => {
        if (sortColumn === column) {
            setIsAscending(!isAscending); // Toggle ascending/descending
        } else {
            setSortColumn(column);
            setIsAscending(true); // Default to ascending when changing column
        }
    };

    return (
        <div className="w-full px-9 pb-8 bg-white shadow-md rounded-lg -mt-2">
            {/* Table header (sorting, search, and total count) */}
            <div className="flex justify-between items-center mb-4 flex-wrap space-y-2 sm:space-y-0">
                <div>
                    <label className="font-medium text-slate-800 text-lg">
                        Menampilkan {filteredData.length} Provinsi
                    </label>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto">
                    {/* Sorting dropdown */}
                    <div className="flex items-center space-x-2">
                        <label className="text-sm font-medium">
                            Urutkan Berdasarkan Nama
                        </label>
                        <select
                            className="border pr-10 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={sortColumn}
                            onChange={(e) => handleSort(e.target.value)}
                        >
                            <option value="provinsi">Nama Provinsi</option>
                            <option value="kawasanIndustri">
                                Kawasan Industri
                            </option>
                            <option value="kek">KEK</option>
                        </select>
                    </div>

                    {/* Search input */}
                    <div className="mt-2 sm:mt-0">
                        <input
                            type="text"
                            className="border p-2 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
                            placeholder="Cari Nama Provinsi"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Scrollable table */}
            <div className="overflow-y-auto max-h-96 rounded-xl border border-gray-300 shadow-sm custom-scrollbar">
                <table className="min-w-full table-auto border-collapse bg-white">
                    <thead className="bg-gray-200 sticky top-0 z-10 h-12">
                        <tr className="text-center border-b border-gray-300">
                            <th className="p-4 text-sm font-bold text-gray-700">
                                No
                            </th>
                            <th
                                className="p-4 text-sm font-bold text-gray-700 cursor-pointer"
                                onClick={() => handleSort("provinsi")}
                            >
                                <div className="flex justify-center align-middle place-items-center">
                                    Nama Provinsi
                                    {sortColumn === "provinsi" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className={`w-4 h-4 ml-2 my-auto transition-transform duration-300 ${
                                                isAscending
                                                    ? "rotate-0"
                                                    : "rotate-180"
                                            }`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 15l7-7 7 7"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </th>
                            <th
                                className="p-4 place-content-center text-sm font-bold text-gray-700 cursor-pointer"
                                onClick={() => handleSort("kawasanIndustri")}
                            >
                                <div className="flex">
                                    {" "}
                                    Jumlah Kawasan Industri
                                    {sortColumn === "kawasanIndustri" && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className={`w-4 h-4 ml-2  my-auto transition-transform duration-300 ${
                                                isAscending
                                                    ? "rotate-0"
                                                    : "rotate-180"
                                            }`}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 15l7-7 7 7"
                                            />
                                        </svg>
                                    )}
                                </div>
                            </th>
                            <th
                                className="p-4 flex place-content-center text-sm font-bold text-gray-700 cursor-pointer"
                                onClick={() => handleSort("kek")}
                            >
                                Jumlah Kawasan Ekonomi Khusus (KEK)
                                {sortColumn === "kek" && (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className={`w-4 h-4 ml-2 my-auto transition-transform duration-300 ${
                                            isAscending
                                                ? "rotate-0"
                                                : "rotate-180"
                                        }`}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                )}
                            </th>
                            <th className="p-4 text-sm font-bold text-gray-700">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, index) => (
                            <tr
                                key={index}
                                className={`border-t border-gray-300 transition duration-200 ${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                } hover:bg-blue-50`}
                            >
                                <td className="p-4 text-sm text-gray-600 text-center">
                                    {index + 1}
                                </td>
                                <td className="p-4 text-sm text-gray-600 text-center">
                                    {row.provinsi}
                                </td>
                                <td className="p-4 text-sm text-gray-600 text-center">
                                    {row.kawasanIndustri}
                                </td>
                                <td className="p-4 text-sm text-gray-600 text-center">
                                    {row.kek}
                                </td>
                                <td className="p-4 text-sm text-gray-600 text-center">
                                    <button
                                        className="bg-slate-800 text-white border m-auto py-2 px-4 rounded-lg hover:bg-blue-500 transition duration-300 ease-in-out flex items-center"
                                        onClick={() =>
                                            handleDetailClick(row.provinsi)
                                        }
                                    >
                                        Lihat Detail
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-4 h-4 ml-2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13 5l7 7-7 7M5 12h14"
                                            />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
