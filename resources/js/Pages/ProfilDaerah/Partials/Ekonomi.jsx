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
    const pdrbData = getSpecificYearData(provinsi.pdrb || [], 2023, 2022);

    return (
        <div className="gap-4 mt-8">
            {/* Bagian pertama: PDRB, Pendapatan, UMR, Profil Investasi */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-2 mt-4">
                <div className="text-[#86858D]">
                    <p>PDRB</p>
                    <p>Pendapatan Daerah</p>
                    <p>Upah Minimum Regional (UMR)</p>
                    <p>Profil Investasi Regional</p>
                </div>
                <div>
                    <p>
                        Rp
                        {formatNumberWithCommas(
                            pdrbData ? pdrbData.nilai_pdrb_berlaku : 0
                        )}{" "}
                        Triliun
                    </p>
                    <p>
                        Rp
                        {formatNumberWithCommas(
                            provinsi.realisasi_pendapatan_daerah
                        )}{" "}
                        Miliar
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

            {/* Bagian kedua: Realisasi Penanaman Modal */}
            <div className="mt-8 mb-6">
                <h2 className="text-lg font-bold">Realisasi Penanaman Modal</h2>
                <div className="grid grid-cols-3 gap-x-4 gap-y-2 mt-4">
                    <div className="text-[#86858D]">
                        <p>Penanaman Modal Dalam Negeri (PMDN)</p>
                        <p>Penanaman Modal Asing (PMA)</p>
                    </div>
                    <div>
                        <p>
                            Rp
                            {formatNumberWithCommas(
                                pmdnData ? pmdnData.nilai_pmdn : 0
                            )}{" "}
                            Juta
                        </p>
                        <p>
                            Rp
                            {formatNumberWithCommas(
                                pmaData ? pmaData.nilai_pma : 0
                            )}{" "}
                            Juta
                        </p>
                    </div>
                </div>
            </div>

            {/* Bagian ketiga: Nilai Perdagangan Luar Negeri */}
            <div className="mb-6 col-span-2">
                <h2 className="text-lg font-bold">
                    Nilai Perdagangan Luar Negeri
                </h2>

                <div className="grid grid-cols-3 gap-x-4 gap-y-2 mt-4">
                    <div className="text-[#86858D]">
                        <p>Nilai Ekspor</p>
                        <p>Nilai Impor</p>
                    </div>
                    <div>
                        <p>
                            Rp
                            {formatNumberWithCommas(provinsi.nilai_ekspor)} Juta
                        </p>
                        <p>
                            Rp
                            {formatNumberWithCommas(provinsi.nilai_impor)} Juta
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ekonomi;
