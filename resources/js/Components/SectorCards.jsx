import React from "react";

const SectorCards = () => {
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Profil Investasi - Sektor dan Komoditas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Example static content for sectors */}
                <div className="bg-white p-4 rounded-lg shadow-md h-96">
                    {" "}
                    <input
                        type="text"
                        className="border p-2 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 w-a sm:w-full"
                        placeholder="Cari Nama Provinsi"
                    />
                </div>
                <div className="mt-2 sm:mt-0"></div>
                {/* Add more cards as needed */}
            </div>
        </div>
    );
};

export default SectorCards;
