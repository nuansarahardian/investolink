import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // pastikan untuk mengimpor leaflet CSS

const GeoMap = () => {
    const [geoData, setGeoData] = useState(null);

    // Fetch GeoJSON data
    useEffect(() => {
        fetch("/geojson/indonesia-provinces.geojson")
            .then((response) => response.json())
            .then((data) => setGeoData(data))
            .catch((error) => console.error("Error fetching GeoJSON:", error));
    }, []);

    // Style for GeoJSON features
    const style = {
        fillColor: "red",
        weight: 2,
        opacity: 1,
        color: "white",
        fillOpacity: 0.7,
    };

    // Function to add events to each feature
    const onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.state) {
            // Add hover event
            layer.on({
                mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                        fillColor: "blue", // Change color on hover
                        weight: 3, // Optional: Increase border thickness on hover
                        color: "yellow", // Optional: Change border color
                    });
                },
                mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                        fillColor: "red", // Revert to original color
                        weight: 2, // Revert to original border thickness
                        color: "white", // Revert to original border color
                    });
                },
            });

            // Bind tooltip with the name of the province
            layer.bindTooltip(feature.properties.state, {
                sticky: true, // Tooltip will follow the mouse cursor
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
                scrollWheelZoom={true}
                className="rounded-[6px] justify-center m-auto mt-4 mb-8"
            >
                {geoData && (
                    <GeoJSON
                        data={geoData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                )}
            </MapContainer>
        </div>
    );
};

export default GeoMap;
