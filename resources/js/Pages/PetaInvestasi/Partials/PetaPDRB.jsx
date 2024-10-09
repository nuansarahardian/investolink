import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, GeoJSON, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { usePage } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import provinces from "../../../../../public/json/provinces.json"; // Menggunakan data yang diimpor

const PetaPDRB = ({ hoveredColor, className }) => {
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

        // Temukan logo berdasarkan nama provinsi dari data impor
        const matchingProvinceLogo = provinces.find(
            (prov) =>
                prov.provinsi.toLowerCase() === nama_provinsi.toLowerCase()
        );
        const logoUrl = matchingProvinceLogo
            ? matchingProvinceLogo.url_image
            : "/default-logo.png"; // default image if not found

        return `
            <div class="relative bg-white p-4 rounded-3xl text-sm w-[250px]">
                <div class="flex">
                    <img src="${logoUrl}" class="w-10 h-10 mr-2">
                    <div>
                        <div class="font-bold text-xl text-gray-800">${nama_provinsi}</div>
                        <div class="text-gray-500 text-xs mb-2">per Q4-2023</div>
                    </div>
                </div>
                <div class="flex text-sm"> 
                    <div class="mr-2 text-gray-400 flex text-[12px] gap-1 flex-col">
                        <div class="font-medium">PDRB <span class="text-gray-600"></span></div>
                        <div class="font-medium">Populasi <span class="text-gray-600"></span></div>
                        <div class="font-medium">Luas Area <span class="text-gray-600"></span></div>
                        <div class="font-medium">Upah Minimum <span class="text-gray-600"></span></div>
                        <div class="font-medium">Nilai Ekspor <span class="text-gray-600"></span></div>
                        <div class="font-medium">Nilai Impor <span class="text-gray-600"></span></div>
                    </div>
                    <div class="flex gap-1 flex-col text-[12px]">
                        <div class="font-medium text-gray-800">${nilai_pdrb_berlaku}</div>
                        <div class="font-medium text-gray-800">${populasi}</div>
                        <div class="font-medium text-gray-800">${luas_area}</div>
                        <div class="font-medium text-gray-800">${upah_minimum_provinsi}</div>
                        <div class="font-medium text-gray-800">${nilai_ekspor}</div>
                        <div class="font-medium text-gray-800">${nilai_impor}</div>
                    </div>
                </div>
            </div>
        `;
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
                className={"rounded-r-lg z-0"}
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
            z-0
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

export default PetaPDRB;
