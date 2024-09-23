import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GeoMap = () => {
    const [geoData, setGeoData] = useState(null);

    useEffect(() => {
        fetch("/geojson/indonesia-provinces.geojson")
            .then((response) => response.json())
            .then((data) => setGeoData(data))
            .catch((error) => console.error("Error fetching GeoJSON:", error));
    }, []);

    // Default style for provinces
    const defaultStyle = {
        fillColor: "red",
        weight: 2,
        opacity: 1,
        color: "white",
        fillOpacity: 0.7,
    };

    // Style when hovered
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

            // Bind tooltip with custom styling for arrow
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
                    className: "", // This removes default Leaflet styles
                    sticky: false,
                }
            );

            // Add event listeners for hover and mouse out
            layer.on({
                mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle(highlightStyle);
                    layer.bringToFront(); // Bring the hovered layer to the front
                },
                mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle(defaultStyle);
                },
            });
        }
    };

    return (
        <div>
            <MapContainer
                style={{
                    height: "600px",
                    width: "95%",
                    backgroundColor: "slate",
                }}
                center={[-2.5, 118]}
                zoom={5}
                scrollWheelZoom={false}
                className="rounded-[6px] justify-center m-auto mt-4 mb-8"
            >
                {geoData && (
                    <GeoJSON
                        data={geoData}
                        style={defaultStyle}
                        onEachFeature={onEachFeature}
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default GeoMap;
