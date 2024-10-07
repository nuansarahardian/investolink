import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, GeoJSON, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

const GeoMap = ({ hoveredColor, className }) => {
    const { provinsi } = usePage().props;
    const [geoData, setGeoData] = useState(null);
    const [coordinatesData, setCoordinatesData] = useState(null);

    useEffect(() => {
        Promise.all([
            fetch("/geojson/indonesia-provinces.geojson").then((res) =>
                res.json()
            ),
            fetch("/geojson/coordinate-provinces.geojson").then((res) =>
                res.json()
            ),
        ])
            .then(([geoJsonData, coordJsonData]) => {
                setGeoData(geoJsonData);
                setCoordinatesData(coordJsonData.features);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const mergedData = useMemo(() => {
        if (!geoData || !provinsi) return null;

        return {
            ...geoData,
            features: geoData.features.map((feature) => {
                const provinceName = feature.properties.state.toLowerCase();
                const apiProvinceData = provinsi.find(
                    (province) =>
                        province.nama_provinsi.toLowerCase() === provinceName
                );

                return apiProvinceData
                    ? {
                          ...feature,
                          properties: {
                              ...feature.properties,
                              ...apiProvinceData,
                          },
                      }
                    : feature;
            }),
        };
    }, [geoData, provinsi]);

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
        color: "white",
        fillOpacity: 1,
    });

    const highlightStyle = {
        weight: 3,
        color: "yellow",
        fillColor: "orange",
        fillOpacity: 1,
    };

    const createTooltipContent = (properties) => {
        const {
            nama_provinsi,
            nilai_pdrb_berlaku = "N/A",
            populasi = "N/A",
            luas_area = "N/A",
            upah_minimum_provinsi = "N/A",
            nilai_ekspor = "N/A",
            nilai_impor = "N/A",
        } = properties;

        return `
            <div class="relative bg-white p-4 rounded-3xl text-sm w-[250px]">
                <div class="font-bold text-lg text-gray-800 mb-1">${nama_provinsi}</div>
                <div class="text-gray-500 text-xs mb-2">per Q4-2023</div>
                <div class="font-medium text-gray-800">PDRB: <span class="text-gray-600">${nilai_pdrb_berlaku}</span></div>
                <div class="font-medium text-gray-800">Populasi: <span class="text-gray-600">${populasi}</span></div>
                <div class="font-medium text-gray-800">Luas Area: <span class="text-gray-600">${luas_area}</span></div>
                <div class="font-medium text-gray-800">Upah Minimum: <span class="text-gray-600">${upah_minimum_provinsi}</span></div>
                <div class="font-medium text-gray-800">Nilai Ekspor: <span class="text-gray-600">${nilai_ekspor}</span></div>
                <div class="font-medium text-gray-800">Nilai Impor: <span class="text-gray-600">${nilai_impor}</span></div>
            </div>`;
    };

    const onEachFeature = (feature, layer) => {
        if (feature.properties) {
            const tooltipContent = createTooltipContent(feature.properties);

            layer.bindTooltip(tooltipContent, { className: "", sticky: false });

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

    const style = (feature) => {
        const color = getColor(feature.properties.nilai_pdrb_berlaku || 0);
        if (hoveredColor && color === hoveredColor) {
            return { ...highlightStyle, fillColor: color };
        }
        return defaultStyle(feature);
    };

    return (
        <div className={` ${className}`}>
            <MapContainer
                style={{ height: "400px", width: "100%" }}
                center={[-2.5, 118]}
                zoom={4.5}
                scrollWheelZoom={false}
                className={"rounded-r-lg"}
            >
                {mergedData && (
                    <>
                        <GeoJSON
                            data={mergedData}
                            style={style}
                            onEachFeature={onEachFeature}
                        />
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

                                const tooltipContent = matchingFeature
                                    ? createTooltipContent(
                                          matchingFeature.properties
                                      )
                                    : `<div>Data not available</div>`;

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
                                        eventHandlers={{
                                            click: () => {
                                                if (matchingFeature) {
                                                    const provinsiId =
                                                        matchingFeature
                                                            .properties
                                                            .provinsi_id;
                                                    Inertia.visit(
                                                        `/provinsi/${provinsiId}`
                                                    );
                                                }
                                            },
                                        }}
                                    >
                                        <Tooltip
                                            direction="right"
                                            offset={[10, 0]}
                                        >
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: tooltipContent,
                                                }}
                                            />
                                        </Tooltip>
                                    </Marker>
                                );
                            })}
                    </>
                )}
            </MapContainer>
        </div>
    );
};

export default GeoMap;
