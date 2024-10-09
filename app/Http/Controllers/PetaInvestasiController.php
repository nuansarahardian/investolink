<?php

namespace App\Http\Controllers;

use App\Models\Sektor;
use App\Models\Provinsi;
use App\Models\DataNasional; 
use Illuminate\Http\Request;
use Inertia\Inertia;

class PetaInvestasiController extends Controller
{
    public function index()
    {
        // Ambil semua data provinsi dan relasi PDRB serta Kawasan Industri
        $provinsi = Provinsi::with(['pdrb' => function ($query) {
                $query->where('tahun', '2023'); // Filter hanya untuk PDRB tahun 2023
            }, 'kawasan_industri' => function ($query) {
                // Ambil kolom latitude, longitude, dan informasi lainnya
                $query->select('kawasan_industri_id','luas_lahan','target_investasi','nama_kawasan_industri','provinsi_id', 'is_kawasan_ekonomi_khusus', 'latitude', 'longitude');
            }])
            ->get() // Ambil semua data provinsi
            ->map(function ($province) {
                // Ambil nilai PDRB untuk tahun 2023
                $pdrbTahun2023 = $province->pdrb->first(); // Ambil data PDRB tahun 2023 yang pertama

                // Map kawasan industri dengan latitude dan longitude
                $kawasanIndustriData = $province->kawasan_industri->map(function ($kawasan) {
                    return [
                        'nama_kawasan_industri' => $kawasan->nama_kawasan_industri,
                        'target_investasi'=>$kawasan->target_investasi,
                        'luas_lahan'=>$kawasan->luas_lahan,
                        'kawasan_industri_id' => $kawasan->kawasan_industri_id,
                        'latitude' => $kawasan->latitude,
                        'longitude' => $kawasan->longitude,
                        'is_kawasan_ekonomi_khusus' => $kawasan->is_kawasan_ekonomi_khusus,
                    ];
                });

                return [
                    'provinsi_id' => $province->provinsi_id,
                    'nama_provinsi' => $province->nama_provinsi,
                    'populasi' => $province->populasi,
                    'luas_area' => $province->luas_area,
                    'upah_minimum_provinsi' => $province->upah_minimum_provinsi,
                    'nilai_ekspor' => $province->nilai_ekspor,
                    'nilai_impor' => $province->nilai_impor,
            
                    'jumlah_kawasan_industri' => $province->kawasan_industri->count(),
                    'jumlah_kawasan_ekonomi_khusus' => $province->kawasan_industri
                        ->where('is_kawasan_ekonomi_khusus', true)
                        ->count(),
                    'nilai_pdrb_berlaku' => $pdrbTahun2023 ? $pdrbTahun2023->nilai_pdrb_berlaku : 'N/A', // Cek jika PDRB ada, jika tidak tampilkan 'N/A'
                    'kawasan_industri' => $kawasanIndustriData, // Tambahkan data kawasan industri dengan latitude dan longitude
                ];
            });

        $sektorData = Sektor::with(['komoditas.provinsi'])->get()
            ->map(function ($sektor) {
                $provinsiIds = $sektor->komoditas->flatMap(function ($komoditas) {
                    return $komoditas->provinsi->pluck('provinsi_id');
                })->unique();
        
                return [
                    'nama_sektor' => $sektor->nama_sektor,
                    'jumlah_provinsi' => $provinsiIds->count(),
                    'komoditas' => $sektor->komoditas->map(function ($komoditas) {
                        return [
                            'nama_komoditas' => $komoditas->nama_komoditas,
                            'provinsi' => $komoditas->provinsi->map(function ($provinsi) {
                                return [
                                    'nama' => $provinsi->nama_provinsi,
                                    'id' => $provinsi->provinsi_id // Menambahkan provinsi_id
                                ];
                            }),
                        ];
                    }),
                ];
            });

        // Ambil semua data dari DataNasional tanpa filter tahun
        $dataNasional = DataNasional::select('tahun', 'nilai_pmdn_nasional', 'nilai_pma_nasional', 'nilai_realisasi_investasi_nasional')
        ->orderBy('tahun', 'asc')
        ->get(); // Mengambil seluruh data DataNasional

        // Render halaman InvesmentMap dengan data provinsi, kawasan industri, sektor, dan data nasional
        return Inertia::render('PetaInvestasi/PetaInvestasi', [
            'provinsi' => $provinsi,
            'sektorData' => $sektorData,
            'dataNasional' => $dataNasional, // Kirim semua data nasional ke view
        ]);
    }
}
