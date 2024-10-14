import { React, useEffect } from "react";

const Ekonomi = ({ provinsi, formatNumber }) => {
    useEffect(() => {
        console.log(provinsi);
    }, [provinsi]);

    // Fungsi untuk memformat angka dengan koma setiap 3 digit dan mempertahankan desimal
    const formatNumberWithCommas = (number) => {
        const validNumber = Number(number);
        if (isNaN(validNumber)) return 0;

        return validNumber.toLocaleString("id-ID", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    };

    const handleCardClick = (link_terkait) => {
        if (link_terkait) {
            window.open(link_terkait, "_blank"); // Membuka link di tab baru
        }
    };

    // Fungsi untuk mendapatkan data dari tahun tertentu, misal 2023, jika tidak ada ambil dari 2022
    const getSpecificYearData = (data, primaryYear, fallbackYear) => {
        const primaryYearData = data.find(
            (item) => parseInt(item.tahun) === primaryYear
        );
        if (primaryYearData) return primaryYearData;

        const fallbackYearData = data.find(
            (item) => parseInt(item.tahun) === fallbackYear
        );
        return fallbackYearData || null;
    };

    // Ambil data PMDN dan PMA untuk tahun 2023 atau 2022
    const pmaData = getSpecificYearData(provinsi.pma || [], 2023, 2022);
    const pmdnData = getSpecificYearData(provinsi.pmdn || [], 2023, 2022);

    return (
        <div className="gap-4 mt-8">
            <div className="flex flex-row gap-x-4 mt-4">
                <div className="text-[#86858D] flex flex-col gap-y-2">
                    <p>PDRB</p>
                    <p>Pendapatan Daerah</p>
                    <p>Upah Minimum Regional (UMR)</p>
                    <p>Profil Investasi Regional</p>
                </div>
                <div className="flex flex-col gap-y-2">
                    <p>
                        Rp
                        {formatNumberWithCommas(
                            provinsi.pdrb
                                ? provinsi.pdrb[0]?.nilai_pdrb_berlaku
                                : 0
                        )}
                    </p>
                    <p>
                        Rp
                        {formatNumberWithCommas(
                            provinsi.realisasi_pendapatan_daerah
                        )}
                    </p>
                    <p>
                        Rp
                        {formatNumberWithCommas(provinsi.upah_minimum_provinsi)}
                    </p>
                    <p>
                        <div
                            onClick={() =>
                                handleCardClick(provinsi.link_terkait)
                            }
                            className="text-blue-600 cursor-pointer"
                        >
                            Lihat Detail
                        </div>
                    </p>
                </div>
            </div>

            <div className="mt-8 mb-6">
                <h2 className="text-lg font-bold">Realisasi Penanaman Modal</h2>
                <div className="flex flex-row gap-x-4 mt-4">
                    <div className="text-[#86858D] flex flex-col gap-y-2">
                        <p>Penanaman Modal Dalam Negeri (PMDN)</p>
                        <p>Penanaman Modal Asing (PMA)</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p>
                            Rp
                            {formatNumberWithCommas(
                                pmdnData ? pmdnData.nilai_pmdn : 0
                            )}
                        </p>
                        <p>
                            Rp
                            {formatNumberWithCommas(
                                pmaData ? pmaData.nilai_pma : 0
                            )}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-6 col-span-2">
                <h2 className="text-lg font-bold">
                    Nilai Perdagangan Luar Negeri
                </h2>

                <div className="flex flex-row gap-x-40 mt-4">
                    <div className="text-[#86858D] flex flex-col gap-y-2">
                        <p>Nilai Ekspor</p>
                        <p>Nilai Impor</p>
                    </div>
                    <div className="flex flex-col gap-y-2">
                        <p>
                            Rp
                            {formatNumberWithCommas(provinsi.nilai_ekspor)}
                        </p>
                        <p>
                            Rp
                            {formatNumberWithCommas(provinsi.nilai_impor)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ekonomi;
