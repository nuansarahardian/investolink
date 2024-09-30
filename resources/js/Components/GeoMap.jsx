import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Legend from "./Legend";

const GeoMap = () => {
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        fetch("/geojson/indonesia-provinces.geojson")
            .then((response) => response.json())
            .then((data) => setGeoData(data))
            .catch((error) => console.error("Error fetching GeoJSON:", error));
    }, []);

    // Fungsi untuk menghitung warna berdasarkan nilai PDRB
    const getColor = (pdrb) => {
        return pdrb > 1000
            ? "#800026"
            : pdrb > 500
            ? "#BD0026"
            : pdrb > 200
            ? "#E31A1C"
            : pdrb > 100
            ? "#FC4E2A"
            : pdrb > 50
            ? "#FD8D3C"
            : "#FEB24C";
    };

    // Style default untuk setiap provinsi
    const defaultStyle = (feature) => ({
        fillColor: getColor(feature.properties.pdrb), // Gunakan warna berdasarkan nilai PDRB
        weight: 2,
        opacity: 1,
        color: "white",
        fillOpacity: 0.7,
    });

    // Style saat di-hover
    const highlightStyle = {
        weight: 3,
        color: "yellow",
        fillColor: "orange",
        fillOpacity: 0.9,
    };

    const onEachFeature = (feature, layer) => {
        if (feature.properties) {
            const provinceName = feature.properties.state;
            const pdrb = feature.properties.pdrb || "Rp465.12 Triliun";
            const pma = feature.properties.pma || "USD123 Triliun";
            const sektorUnggulan =
                feature.properties.sektor || "Lorem Ipsum, Lorem Ipsum";
            const komoditasUnggulan =
                feature.properties.komoditas || "Lorem Ipsum, Lorem Ipsum";

            // Bind tooltip dengan styling custom
            layer.bindTooltip(
                `<div class="relative bg-white p-4 rounded-3xl  text-sm w-[250px]">
            <div class="font-bold text-lg text-gray-800 mb-1">${provinceName}</div>
            <div class="text-gray-500 text-xs mb-2">per Q4-2023</div>
            <div class="font-medium text-gray-800">PDRB: <span class="text-gray-600">${pdrb}</span></div>
            <div class="font-medium text-gray-800">PMA: <span class="text-gray-600">${pma}</span></div>
            <div class="font-medium text-gray-800">Sektor Unggulan:</div>
            <div class="text-gray-600">${sektorUnggulan}</div>
            <div class="font-medium text-gray-800">Komoditas Unggulan:</div>
            <div class="text-gray-600">${komoditasUnggulan}</div>    
        </div>`,
                {
                    className: "", // Ini menghilangkan style default Leaflet
                    sticky: false,
                }
            );

            // Tambahkan event listener untuk hover dan mouse out
            layer.on({
                mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle(highlightStyle);
                    layer.bringToFront(); // Bawa layer yang di-hover ke depan
                },
                mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle(defaultStyle(feature)); // Kembalikan style default
                },
            });
        }
    };
    return (
        <div
            className="map-legend-container"
            style={{ display: "flex", alignItems: "flex-start" }}
        >
            {/* Tambahkan style di sini */}
            <MapContainer
                style={{ height: "600px", width: "75%" }}
                center={[-2.5, 118]}
                zoom={5}
                scrollWheelZoom={false}
            >
                {geoData && (
                    <GeoJSON
                        data={geoData}
                        style={defaultStyle}
                        onEachFeature={onEachFeature}
                    />
                )}
            </MapContainer>
            {/* Panggil Legend di samping peta */}
            <Legend />
        </div>
    );
};

export default GeoMap;
