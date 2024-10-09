import React, { useEffect, useState, useMemo } from "react";
import { MapContainer, GeoJSON, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { usePage } from "@inertiajs/react";

const PetaKEK = ({ hoveredColor, className }) => {
    const { provinsi } = usePage().props; // Ambil data provinsi dari Inertia
    const [geoData, setGeoData] = useState(null);

    // Fetch GeoJSON data untuk peta
    useEffect(() => {
        fetch("/geojson/indonesia-provinces.geojson")
            .then((res) => res.json())
            .then((data) => setGeoData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // Gabungkan GeoJSON data dengan data provinsi dari server
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

    // Fungsi untuk memberikan warna berdasarkan nilai PDRB
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

    // Default style untuk setiap provinsi di peta
    const defaultStyle = (feature) => ({
        fillColor: getColor(feature.properties.nilai_pdrb_berlaku || 0),
        weight: 1,
        color: "white",
        fillOpacity: 1,
    });

    // Style ketika provinsi di-hover
    const highlightStyle = {
        weight: 3,
        color: "yellow",
        fillColor: "orange",
        fillOpacity: 1,
    };

    // Tidak perlu lagi tooltip untuk setiap provinsi, hanya style ketika di-hover
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

    // Fungsi untuk menentukan style pada setiap provinsi
    const style = (feature) => {
        const color = getColor(feature.properties.nilai_pdrb_berlaku || 0);
        if (hoveredColor && color === hoveredColor) {
            return { ...highlightStyle, fillColor: color };
        }
        return defaultStyle(feature);
    };

    // Fungsi untuk membuat konten tooltip berdasarkan data kawasan industri
    const createTooltipContent = (kawasan, provinsiName) => {
        return `
            <div class="relative bg-white p-4 rounded-3xl text-sm w-[250px]">
                <div class="font-bold text-lg text-gray-800 mb-1">${kawasan.nama_kawasan_industri}</div>
                <div class="font-medium text-gray-800">Provinsi: <span class="text-gray-600">${provinsiName}</span></div> <!-- Tambahkan Nama Provinsi -->
                <div class="font-medium text-gray-800">Luas: <span class="text-gray-600">${kawasan.luas_lahan} ha</span></div>
                <div class="font-medium text-gray-800">Target Investasi: <span class="text-gray-600">Rp${kawasan.target_investasi}</span></div>
            </div>`;
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
                {/* Tampilkan GeoJSON data yang sudah digabung dengan data provinsi */}
                {mergedData && (
                    <GeoJSON
                        data={mergedData}
                        style={style}
                        onEachFeature={onEachFeature} // Hanya untuk mengubah style, tanpa tooltip untuk provinsi
                    />
                )}
                {/* Tampilkan marker dan tooltip hanya untuk kawasan industri */}
                {provinsi.map((provinsiItem) =>
                    provinsiItem.kawasan_industri.map((kawasan, index) => {
                        // Hanya tampilkan marker jika kawasan industri memiliki latitude dan longitude
                        if (kawasan.latitude && kawasan.longitude) {
                            const position = [
                                kawasan.latitude,
                                kawasan.longitude,
                            ];
                            return (
                                <Marker key={index} position={position}>
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
