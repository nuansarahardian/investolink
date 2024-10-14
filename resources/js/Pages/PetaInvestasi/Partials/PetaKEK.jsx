import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, GeoJSON, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { usePage } from "@inertiajs/react";
import L from "leaflet";
import KEKImage from "../../../../../public/json/kek_image.json"; // Import file JSON dengan gambar KEK

const PetaKEK = ({ hoveredColor, className }) => {
    const { provinsi } = usePage().props;
    const [geoData, setGeoData] = useState(null);

    const redIcon = new L.Icon({
        iconUrl: "/icon/loc.png",
        iconSize: [40, 40],
        iconAnchor: [20, 36],
        popupAnchor: [0, -40],
        shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
        shadowSize: [41, 41],
    });

    useEffect(() => {
        fetch("/geojson/indonesia-provinces.geojson")
            .then((res) => res.json())
            .then((data) => setGeoData(data))
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
        return pdrb > 1000
            ? "#23577E"
            : pdrb > 600
            ? "#3E7AA6"
            : pdrb > 250
            ? "#5899C8"
            : pdrb > 150
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

    // Fungsi untuk mencari gambar KEK berdasarkan nama KEK
    const getKEKImage = (namaKEK) => {
        const kekData = KEKImage.find((kek) => kek.KEK === namaKEK);
        return kekData ? kekData.Image : "/default-image.jpg"; // Gambar default jika tidak ada kecocokan
    };

    // Fungsi untuk membuat konten tooltip
    const createTooltipContent = (kawasan, provinsiName) => {
        const kekImageUrl = getKEKImage(kawasan.nama_kawasan_industri); // Cari gambar KEK yang sesuai

        return `
            <div class="tooltip-container ">
                <div class="flex mb-2 items-center">
                    <img src="${kekImageUrl}" class="w-14 h-14 rounded-md mr-2 my-auto">
                    <div>
                        <div class="font-bold text-xl text-gray-800">${kawasan.nama_kawasan_industri}</div>
                        <div class="text-gray-500 text-xs mb-2">Provinsi: ${provinsiName}</div>
                    </div>
                </div>
                <div class="flex text-sm">
                    <div class="mr-2 text-gray-400 flex text-[12px] gap-1 flex-col">
                        <div class="font-medium">Luas</div>
                        <div class="font-medium">Target Investasi</div>
                    </div>
                    <div class="flex gap-1 flex-col text-[12px]">
                        <div class="font-medium text-gray-800">${kawasan.luas_lahan}    </div>
                        <div class="font-medium text-gray-800">${kawasan.target_investasi}</div>
                    </div>
                </div>
            </div>
        `;
    };

    const onEachFeature = (feature, layer) => {
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
                center={[-2.5, 118]} // Set posisi awal peta di Indonesia
                zoom={4.5}
                scrollWheelZoom={false}
                className={"rounded-r-lg"}
            >
                {mergedData && (
                    <GeoJSON
                        data={mergedData}
                        style={style}
                        onEachFeature={onEachFeature}
                    />
                )}
                {provinsi.map((provinsiItem) =>
                    provinsiItem.kawasan_industri.map((kawasan, index) => {
                        if (kawasan.latitude && kawasan.longitude) {
                            const position = [
                                kawasan.latitude,
                                kawasan.longitude,
                            ];
                            return (
                                <Marker
                                    key={index}
                                    position={position}
                                    icon={redIcon}
                                    eventHandlers={{
                                        click: () => {
                                            // Arahkan ke link_terkait ketika marker diklik
                                            window.open(
                                                kawasan.link_terkait,
                                                "_blank"
                                            );
                                        },
                                    }}
                                >
                                    <Tooltip direction="right" offset={[10, 0]}>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: createTooltipContent(
                                                    kawasan,
                                                    provinsiItem.nama_provinsi
                                                ),
                                            }}
                                        />
                                    </Tooltip>
                                </Marker>
                            );
                        }
                        return null;
                    })
                )}
            </MapContainer>
        </div>
    );
};

export default PetaKEK;
