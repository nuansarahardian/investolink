import React from "react";

const SectorCards = () => {
    return (
        <div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
                Profil Investasi - Sektor dan Komoditas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Example static content for sectors */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">Sektor Pertanian</h3>
                    <p>Lokasi: Sumatra</p>
                    <p>Komoditas: Kopi, Karet</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold">
                        Sektor Pertambangan
                    </h3>
                    <p>Lokasi: Kalimantan</p>
                    <p>Komoditas: Batubara</p>
                </div>
                {/* Add more cards as needed */}
            </div>
        </div>
    );
};

export default SectorCards;
