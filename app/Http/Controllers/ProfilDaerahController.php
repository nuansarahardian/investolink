<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Provinsi;
use App\Models\PMA;
use App\Models\PMDN;
use App\Models\Realisasi_Investasi;
use App\Models\PDRBPerSektor; // Tambahkan model PDRBPerSektor
use App\Models\Peluang_Investasi; // Tambahkan model Peluang_Investasi
use Inertia\Inertia;

class ProfilDaerahController extends Controller
{
    public function show($provinsi_id)
    {
        // Mengambil data provinsi beserta relasi 'pdrb' dan hanya kawasan industri yang merupakan kawasan ekonomi khusus
        $provinsi = Provinsi::with(['pdrb', 'kawasan_industri' => function ($query) {
            $query->where('is_kawasan_ekonomi_khusus', true);
        }])
        ->where('provinsi_id', $provinsi_id)
        ->firstOrFail();

        // Mengambil seluruh data PMA berdasarkan provinsi_id dan mengurutkan dari tahun terbaru
        $pma = PMA::where('provinsi_id', $provinsi_id)
            ->orderBy('tahun', 'desc')  // Urutkan berdasarkan tahun dari yang terbesar
            ->get();

        // Mengambil seluruh data PMDN berdasarkan provinsi_id dan mengurutkan dari tahun terbaru
        $pmdn = PMDN::where('provinsi_id', $provinsi_id)
            ->orderBy('tahun', 'desc')  // Urutkan berdasarkan tahun dari yang terbesar
            ->get();

        // Mengambil semua data realisasi investasi berdasarkan provinsi_id
        $realisasiInvestasi = Realisasi_Investasi::where('provinsi_id', $provinsi_id)
            ->orderBy('tahun', 'asc')  // Urutkan berdasarkan tahun dari yang terkecil ke terbesar
            ->get();

      
        // Mengambil data PDRB per sektor berdasarkan provinsi_id
        $pdrbPerSektor = PDRBPerSektor::with('sektor')
            ->where('provinsi_id', $provinsi_id)
            ->get();

               // Mengambil kawasan industri yang merupakan kawasan ekonomi khusus
         $kawasanEkonomiKhusus = $provinsi->kawasan_industri()
         ->where('is_kawasan_ekonomi_khusus', true)
        ->get();

// Mengambil kawasan industri yang bukan kawasan ekonomi khusus
        $kawasanIndustri = $provinsi->kawasan_industri()
        ->get();
        // Mengambil data peluang investasi berdasarkan provinsi_id
        $peluangInvestasi = Peluang_Investasi::where('provinsi_id', $provinsi_id) // Pastikan data berdasarkan provinsi_id
            ->get();

        // Menyusun data PDRB per sektor menjadi array
        $pdrbPerSektorData = $pdrbPerSektor->map(function ($item) {
            return [
                'sektor' => $item->sektor->nama_sektor, // Ambil nama sektor
                'nilai_pdrb_per_sektor' => $item->nilai_pdrb_per_sektor,
            ];
        });

        // Menyusun data PDRB menjadi array per tahun
        $pdrbData = $provinsi->pdrb->map(function ($pdrb) {
            return [
                'tahun' => $pdrb->tahun,
                'nilai_pdrb_berlaku' => $pdrb->nilai_pdrb_berlaku,
                'nilai_pdrb_konstan' => $pdrb->nilai_pdrb_konstan,
            ];
        });
        $realisasiInvestasiData = $realisasiInvestasi->sortBy('tahun')->map(function ($investasi) {
            return [
                'tahun' => $investasi->tahun,
                'nilai_realisasi_investasi' => $investasi->nilai_realisasi_investasi,
            ];
        });
        

        // Menyusun data PMA dan PMDN menjadi array per tahun
        $pmaData = $pma->map(function ($dataPMA) {
            return [
                'tahun' => $dataPMA->tahun,
                'nilai_pma' => $dataPMA->nilai_pma,
            ];
        });

        $pmdnData = $pmdn->map(function ($dataPMDN) {
            return [
                'tahun' => $dataPMDN->tahun,
                'nilai_pmdn' => $dataPMDN->nilai_pmdn,
            ];
        });

        // Menyusun data peluang investasi menjadi array
        $peluangInvestasiData = $peluangInvestasi->map(function ($investasi) {
            return [
                'judul_projek' => $investasi->judul_projek,
                'daerah' => $investasi->daerah,
                'link_menuju_page' => $investasi->link_menuju_page,
                'link_gambar' => $investasi->link_gambar,
            ];
        });

        // Menyusun data provinsi dari properti yang ada di model
        $provinsiData = [
            'provinsi_id' => $provinsi->provinsi_id,
            'nama_provinsi' => $provinsi->nama_provinsi,
            'gambar_ikonik' => $provinsi->gambar_ikonik,
            'luas_area' => number_format($provinsi->luas_area, 2, ',', '.'),

            'website' => $provinsi->website,
            'email' => $provinsi->email,
            'nomor_handphone' => $provinsi->nomor_handphone,
            'populasi' => $provinsi->populasi,
            'link_terkait' => $provinsi->link_terkait,
            'upah_minimum_provinsi' => $provinsi->upah_minimum_provinsi,
            'realisasi_pendapatan_daerah' => $provinsi->realisasi_pendapatan_daerah,
            'nilai_ekspor' => $provinsi->nilai_ekspor,
            'nilai_impor' => $provinsi->nilai_impor,
            'pdrb' => $pdrbData, // Data PDRB yang sudah diformat
            'pdrb_per_sektor' => $pdrbPerSektorData, // Data PDRB per sektor yang baru ditambahkan
            'kawasan_ekonomi_khusus' => $kawasanEkonomiKhusus, // Kawasan ekonomi khusus
            'kawasan_industri' => $kawasanIndustri, // Kawasan non-ekonomi khusus
            'pma' => $pmaData, // Data PMA yang sudah diformat
            'pmdn' => $pmdnData, // Data PMDN yang sudah diformat
            'realisasi_investasi' => $realisasiInvestasiData, // Data realisasi investasi untuk setiap tahun
            'peluang_investasi' => $peluangInvestasiData, // Data peluang investasi yang baru ditambahkan
        ];
// dd($provinsiData);
        // Merender halaman 'ProfilDaerah' dengan data provinsi yang telah disusun
        return Inertia::render('ProfilDaerah/ProfilDaerah', ['provinsi' => $provinsiData]);
    }
}
