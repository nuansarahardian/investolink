import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Marker, Tooltip } from "react-leaflet";
import L from "leaflet"; // Leaflet untuk membuat DivIcon
import "leaflet/dist/leaflet.css";
import Legend from "./Legend";

const GeoMap = () => {
    const [geoData, setGeoData] = useState(null);
    const [apiData, setApiData] = useState(null);
    const [coordinatesData, setCoordinatesData] = useState(null); // State for coordinates

    // Fetch GeoJSON data untuk koordinat provinsi
    useEffect(() => {
        fetch("/geojson/indonesia-provinces.geojson")
            .then((response) => response.json())
            .then((data) => setGeoData(data))
            .catch((error) => console.error("Error fetching GeoJSON:", error));
    }, []);

    // Fetch data atribut provinsi dari controller Laravel
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/provinsi")
            .then((response) => response.json())
            .then((data) => setApiData(data.data))
            .catch((error) => console.error("Error fetching API data:", error));
    }, []);

    // Fetch coordinates from GeoJSON
    useEffect(() => {
        fetch("/geojson/coordinate-provinces.geojson")
            .then((response) => response.json())
            .then((data) => setCoordinatesData(data.features)) // Save features containing coordinates
            .catch((error) =>
                console.error("Error fetching coordinates:", error)
            );
    }, []);

    // Menggabungkan data GeoJSON dan data dari API berdasarkan nama provinsi
    const mergeData = () => {
        if (!geoData || !apiData) return null;

        const mergedGeoData = {
            ...geoData,
            features: geoData.features.map((feature) => {
                const provinceName = feature.properties.state;

                const apiProvinceData = apiData.find(
                    (province) =>
                        province.nama_provinsi.toLowerCase() ===
                        provinceName.toLowerCase()
                );
                const pdrbTahun2023 = apiProvinceData?.pdrb.find(
                    (pdrb) => pdrb.tahun === "2023"
                );

                return {
                    ...feature,
                    properties: {
                        ...feature.properties,
                        ...apiProvinceData,
                        pdrb: pdrbTahun2023
                            ? pdrbTahun2023.nilai_pdrb_berlaku
                            : "N/A",
                    },
                };
            }),
        };

        return mergedGeoData;
    };

    const mergedData = mergeData();

    // Fungsi untuk menghitung warna berdasarkan nilai PDRB
    const getColor = (pdrb) => {
        return pdrb > 1000000
            ? "#23577E"
            : pdrb > 600000
            ? "#3E7AA6"
            : pdrb > 250000
            ? "#5899C8"
            : pdrb > 150000
            ? "#8CBBDD"
            : "#D0E1ED";
    };

    // Style default untuk setiap provinsi
    const defaultStyle = (feature) => ({
        fillColor: getColor(feature.properties.pdrb || 0),
        weight: 1,
        opacity: 1,
        color: "white",
        fillOpacity: 1,
    });

    // Style saat di-hover
    const highlightStyle = {
        weight: 3,
        color: "yellow",
        fillColor: "orange",
        fillOpacity: 1,
    };

    // Event handler untuk setiap fitur GeoJSON
    const onEachFeature = (feature, layer) => {
        if (feature.properties) {
            const provinceName =
                feature.properties.nama_provinsi || feature.properties.state;
            const pdrb = feature.properties.pdrb || "N/A";
            const populasi = feature.properties.populasi || "N/A";
            const luasArea = feature.properties.luas_area || "N/A";
            const upahMinProvinsi =
                feature.properties.upah_minimum_provinsi || "N/A";
            const nilaiEkspor = feature.properties.nilai_ekspor || "N/A";
            const nilaiImpor = feature.properties.nilai_impor || "N/A";

            layer.bindTooltip(
                `<div class="relative bg-white p-4 rounded-3xl text-sm w-[250px]">
                    <div class="font-bold text-lg text-gray-800 mb-1">${provinceName}</div>
                    <div class="text-gray-500 text-xs mb-2">per Q4-2023</div>
                    <div class="font-medium text-gray-800">PDRB: <span class="text-gray-600">${pdrb}</span></div>
                    <div class="font-medium text-gray-800">Populasi: <span class="text-gray-600">${populasi}</span></div>
                    <div class="font-medium text-gray-800">Luas Area: <span class="text-gray-600">${luasArea}</span></div>
                    <div class="font-medium text-gray-800">Upah Minimum: <span class="text-gray-600">${upahMinProvinsi}</span></div>
                    <div class="font-medium text-gray-800">Nilai Ekspor: <span class="text-gray-600">${nilaiEkspor}</span></div>
                    <div class="font-medium text-gray-800">Nilai Impor: <span class="text-gray-600">${nilaiImpor}</span></div>
                </div>`,
                { className: "", sticky: false }
            );

            layer.on({
                mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle(highlightStyle);
                    layer.bringToFront();
                },
                mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle(defaultStyle(feature));
                },
            });
        }
    };

    return (
        <div
            className="map-legend-container"
            style={{ display: "flex", alignItems: "flex-start" }}
        >
            <MapContainer
                style={{ height: "600px", width: "75%" }}
                center={[-2.5, 118]}
                zoom={5}
                scrollWheelZoom={false}
            >
                {mergedData && (
                    <>
                        <GeoJSON
                            data={mergedData}
                            style={defaultStyle}
                            onEachFeature={onEachFeature}
                        />
                        {/* Tambahkan Marker untuk menampilkan nama provinsi */}
                        {coordinatesData &&
                            coordinatesData.map((feature, index) => {
                                const provinceName = feature.properties.name; // Get province name from properties
                                const coordinates =
                                    feature.geometry.coordinates; // Get coordinates from geometry

                                const position = L.latLng(
                                    coordinates[1], // Latitude
                                    coordinates[0] // Longitude
                                );

                                // Ambil data provinsi dari GeoJSON yang sama
                                const matchingFeature =
                                    mergedData.features.find(
                                        (f) =>
                                            f.properties.state.toLowerCase() ===
                                            provinceName.toLowerCase()
                                    );

                                const pdrb =
                                    matchingFeature?.properties?.pdrb || "N/A";
                                const populasi =
                                    matchingFeature?.properties?.populasi ||
                                    "N/A";
                                const luasArea =
                                    matchingFeature?.properties?.luas_area ||
                                    "N/A";
                                const upahMinProvinsi =
                                    matchingFeature?.properties
                                        ?.upah_minimum_provinsi || "N/A";
                                const nilaiEkspor =
                                    matchingFeature?.properties?.nilai_ekspor ||
                                    "N/A";
                                const nilaiImpor =
                                    matchingFeature?.properties?.nilai_impor ||
                                    "N/A";

                                // Create a divIcon for province name with stroke and hover tooltip
                                const customIcon = L.divIcon({
                                    html: `<div style="
                                    padding: 2px 6px; 
                                    border-radius: 4px; 
                                    font-size: 10px; 
                                    font-weight: normal;
                                    color: #5B5A68; 
                                    text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF; 
                                    text-align: center;
                                    display: flex;  
                                    transform: translateX(-10px); 
                                    white-space: normal; /* Izinkan teks untuk terputus menjadi beberapa baris */
                                    max-width: 50px; /* Atur lebar maksimum untuk memaksa teks menjadi dua baris */
                                    line-height: 1;"> <!-- Atur line-height ke nilai yang lebih kecil -->
                                    ${provinceName}
                                    </div>`,

                                    className: "", // Optional: Add your own class for more styling
                                });

                                return (
                                    <Marker
                                        key={index}
                                        position={position}
                                        icon={customIcon}
                                    >
                                        <Tooltip>
                                            <div className="relative bg-white p-4 rounded-3xl text-sm w-[250px]">
                                                <div className="font-bold text-lg text-gray-800 mb-1">
                                                    {provinceName}
                                                </div>
                                                <div className="text-gray-500 text-xs mb-2">
                                                    per Q4-2023
                                                </div>
                                                <div className="font-medium text-gray-800">
                                                    PDRB:{" "}
                                                    <span className="text-gray-600">
                                                        {pdrb}
                                                    </span>
                                                </div>
                                                <div className="font-medium text-gray-800">
                                                    Populasi:{" "}
                                                    <span className="text-gray-600">
                                                        {populasi}
                                                    </span>
                                                </div>
                                                <div className="font-medium text-gray-800">
                                                    Luas Area:{" "}
                                                    <span className="text-gray-600">
                                                        {luasArea}
                                                    </span>
                                                </div>
                                                <div className="font-medium text-gray-800">
                                                    Upah Minimum:{" "}
                                                    <span className="text-gray-600">
                                                        {upahMinProvinsi}
                                                    </span>
                                                </div>
                                                <div className="font-medium text-gray-800">
                                                    Nilai Ekspor:{" "}
                                                    <span className="text-gray-600">
                                                        {nilaiEkspor}
                                                    </span>
                                                </div>
                                                <div className="font-medium text-gray-800">
                                                    Nilai Impor:{" "}
                                                    <span className="text-gray-600">
                                                        {nilaiImpor}
                                                    </span>
                                                </div>
                                            </div>
                                        </Tooltip>
                                    </Marker>
                                );
                            })}
                    </>
                )}
            </MapContainer>
            <Legend />
        </div>
    );
};

export default GeoMap;
