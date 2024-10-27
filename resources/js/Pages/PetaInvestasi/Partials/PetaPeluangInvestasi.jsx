import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, GeoJSON, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { usePage } from "@inertiajs/react";
import { Link } from "@inertiajs/react"; // Menggunakan Link dari Inertia.js
import provinces from "../../../../../public/json/provinces.json"; // Menggunakan data yang diimpor

const PetaPeluangInvestasi = ({ hoveredColor, className }) => {
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

    const getColor = (totalPeluangInvestasi) => {
        // Pastikan nilai diubah ke tipe angka
        const value = parseFloat(totalPeluangInvestasi) || 0;

        return value >= 20
            ? "#23577E" // Untuk nilai >= 20
            : value >= 10
            ? "#3E7AA6" // Untuk nilai antara 15 dan <20
            : value >= 5
            ? "#5899C8" // Untuk nilai antara 10 dan <15
            : value >= 1
            ? "#8CBBDD" // Untuk nilai antara 5 dan <10
            : value >= 0
            ? "#D0E1ED" // Untuk nilai antara 1 dan <5
            : "#F0F4F8"; // Untuk nilai kurang dari 1
    };

    const defaultStyle = (feature) => ({
        fillColor: getColor(feature.properties.total_peluang_investasi || 0),
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
            total_peluang_investasi = "N/A",
            nilai_pma,
            nilai_pmdn,
            sektor_terbesar,
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
            <div class="tooltip-container rounded-md ">
                <div class="flex mb-2 rounded-md">
                    <img src="${logoUrl}" class="w-10 h-10 mr-2 my-auto ">
                    <div>
                        <div class="font-bold text-xl text-gray-800">${nama_provinsi}</div>
                        <div class="text-gray-500 text-xs mb-2">Sumber: BPS BKPM</div>
                    </div>
                </div>
                <div class="flex text-sm"> 
                    <div class="mr-2 text-gray-400 flex text-[12px] gap-1 flex-col">
                        <div class="font-medium">Total Peluang Investasi <span class="text-gray-600"></span></div>
                        <div class="font-medium">PMA <span class="text-gray-600"></span></div>
                        <div class="font-medium">PMDN <span class="text-gray-600"></span></div>
                        <div class="font-medium">Sektor Unggulan <span class="text-gray-600"></span></div>
                        
                    </div>
                    <div class="flex gap-1 flex-col text-[12px]">
                        <div class="font-medium text-gray-800">Rp${total_peluang_investasi} Triliun</div>
                        <div class="font-medium text-gray-800">Rp${nilai_pma}  Triliun</div>
                        <div class="font-medium text-gray-800">Rp${nilai_pmdn} Triliun </div>
                        <div class="font-medium text-gray-800">${
                            sektor_terbesar?.nama_sektor || "N/A"
                        } </div>
               
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
        const color = getColor(feature.properties.total_peluang_investasi || 0);
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
                                    <div key={index}>
                                        {/* Hidden Link used for navigation */}
                                        <Link
                                            id={`link-${matchingFeature.properties.provinsi_id}`}
                                            href={`/provinsi/${matchingFeature.properties.provinsi_id}`}
                                            className="hidden"
                                        >
                                            Link
                                        </Link>
                                        <Marker
                                            position={position}
                                            icon={customIcon}
                                            eventHandlers={{
                                                click: () => {
                                                    // Trigger click on the hidden Link element
                                                    document
                                                        .getElementById(
                                                            `link-${matchingFeature.properties.provinsi_id}`
                                                        )
                                                        .click();
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
                                    </div>
                                );
                            })}
                    </>
                )}
            </MapContainer>
        </div>
    );
};

export default PetaPeluangInvestasi;
