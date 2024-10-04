import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { usePage } from "@inertiajs/react"; // Import untuk menggunakan props dari Inertia
import Legend from "./Legend";

const GeoMap = () => {
    const { provinsi } = usePage().props; // Mengambil data dari props Inertia
    const [geoData, setGeoData] = useState(null);
    const [coordinatesData, setCoordinatesData] = useState(null);

    // Fetch GeoJSON data untuk koordinat provinsi
    useEffect(() => {
        fetch("/geojson/indonesia-provinces.geojson")
            .then((response) => response.json())
            .then((data) => setGeoData(data))
            .catch((error) => console.error("Error fetching GeoJSON:", error));
    }, []);

    // Fetch coordinates from GeoJSON
    useEffect(() => {
        fetch("/geojson/coordinate-provinces.geojson")
            .then((response) => response.json())
            .then((data) => setCoordinatesData(data.features))
            .catch((error) =>
                console.error("Error fetching coordinates:", error)
            );
    }, []);

    const mergeData = () => {
        if (!geoData || !provinsi) return null;

        const mergedGeoData = {
            ...geoData,
            features: geoData.features.map((feature) => {
                const provinceName = feature.properties.state;

                const apiProvinceData = provinsi.find(
                    (province) =>
                        province.nama_provinsi.toLowerCase() ===
                        provinceName.toLowerCase()
                );

                // Pastikan apiProvinceData tidak undefined sebelum mengaksesnya
                if (!apiProvinceData) {
                    return feature; // Kembalikan feature tanpa modifikasi jika tidak ditemukan
                }

                return {
                    ...feature,
                    properties: {
                        ...feature.properties,
                        ...apiProvinceData, // Gabungkan data dari API (PDRB, populasi, dll)
                    },
                };
            }),
        };

        return mergedGeoData;
    };

    const mergedData = mergeData();

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

    const defaultStyle = (feature) => ({
        fillColor: getColor(feature.properties.nilai_pdrb_berlaku || 0),
        weight: 1,
        opacity: 1,
        color: "white",
        fillOpacity: 1,
    });

    const highlightStyle = {
        weight: 3,
        color: "yellow",
        fillColor: "orange",
        fillOpacity: 1,
    };

    const onEachFeature = (feature, layer) => {
        if (feature.properties) {
            const provinceName =
                feature.properties.nama_provinsi || feature.properties.state;
            const pdrb = feature.properties.nilai_pdrb_berlaku || "N/A";
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
                                const provinceName = feature.properties.name;
                                const coordinates =
                                    feature.geometry.coordinates;

                                const position = L.latLng(
                                    coordinates[1],
                                    coordinates[0]
                                );

                                const matchingFeature =
                                    mergedData.features.find(
                                        (f) =>
                                            f.properties.state.toLowerCase() ===
                                            provinceName.toLowerCase()
                                    );

                                const pdrb =
                                    matchingFeature?.properties
                                        ?.nilai_pdrb_berlaku || "N/A";
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
                                    white-space: normal;
                                    max-width: 50px;
                                    line-height: 1;">
                                    ${provinceName}
                                    </div>`,
                                    className: "",
                                });

                                return (
                                    <Marker
                                        key={index}
                                        position={position}
                                        icon={customIcon}
                                    >
                                        <Tooltip
                                            direction="right"
                                            offset={[10, 0]}
                                        >
                                            <div className="bg-white p-2 rounded">
                                                <div className="font-bold">
                                                    {provinceName}
                                                </div>
                                                <div>PDRB: {pdrb}</div>
                                                <div>Populasi: {populasi}</div>
                                                <div>Luas Area: {luasArea}</div>
                                                <div>
                                                    Upah Minimum:{" "}
                                                    {upahMinProvinsi}
                                                </div>
                                                <div>
                                                    Nilai Ekspor: {nilaiEkspor}
                                                </div>
                                                <div>
                                                    Nilai Impor: {nilaiImpor}
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
