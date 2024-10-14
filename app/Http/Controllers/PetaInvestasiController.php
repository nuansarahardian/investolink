<?php

namespace App\Http\Controllers;

use App\Models\Sektor;
use App\Models\Provinsi;
use App\Models\PMA;
use App\Models\PMDN;
use App\Models\DataNasional; 
use App\Models\PDRBPerSektor; 
use Illuminate\Http\Request;
use Inertia\Inertia;

class PetaInvestasiController extends Controller
{
    public function index()
    {
        // Ambil semua data provinsi dan relasi PDRB serta Kawasan Industri
        $provinsi = Provinsi::with(['pdrb' => function ($query) {
                $query->orderBy('tahun', 'desc'); // Urutkan berdasarkan tahun, ambil data terbaru
            }, 'kawasan_industri' => function ($query) {
                // Ambil kolom latitude, longitude, dan informasi lainnya
                $query->select('kawasan_industri_id', 'luas_lahan', 'target_investasi', 'nama_kawasan_industri', 'provinsi_id', 'is_kawasan_ekonomi_khusus', 'latitude', 'longitude', 'link_terkait');
            }])
            ->get() // Ambil semua data provinsi
            ->map(function ($province) {
                // Ambil data PDRB tahun terkini
                $latestPdrb = $province->pdrb->first(); // Ambil data PDRB terbaru
                $latestPma = $province->pma->sortByDesc('tahun')->first(); // Ambil PMA tahun terkini
                $latestPmdn = $province->pmdn->sortByDesc('tahun')->first(); // Ambil PMDN tahun terkini

                // Ambil sektor dengan nilai PDRB terbesar untuk provinsi ini
                $pdrbPerSektor = PDRBPerSektor::with('sektor')
                    ->whereHas('sektor') // Pastikan sektor ada
                    ->where('provinsi_id', $province->provinsi_id) // Filter berdasarkan provinsi
                    ->orderBy('nilai_pdrb_per_sektor', 'desc') // Urutkan berdasarkan nilai PDRB
                    ->first(); // Ambil yang pertama (nilai terbesar)

                // Map kawasan industri dengan latitude dan longitude
                $kawasanIndustriData = $province->kawasan_industri->map(function ($kawasan) {
                    return [
                        'nama_kawasan_industri' => $kawasan->nama_kawasan_industri,
                        'target_investasi' => $kawasan->target_investasi,
                        'luas_lahan' => $kawasan->luas_lahan,
                        'kawasan_industri_id' => $kawasan->kawasan_industri_id,
                        'latitude' => $kawasan->latitude,
                        'longitude' => $kawasan->longitude,
                        'is_kawasan_ekonomi_khusus' => $kawasan->is_kawasan_ekonomi_khusus,
                        'link_terkait'=> $kawasan ->link_terkait
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
                        'nilai_pdrb_berlaku' => $latestPdrb ? intval($latestPdrb->nilai_pdrb_berlaku / 1000) : 'N/A',
 



                    'tahun_pdrb' => $latestPdrb ? $latestPdrb->tahun : 'N/A', // Ambil tahun dari data PDRB
                    'tahun_pma' => $latestPma ? $latestPma->tahun : 'N/A', // Ambil tahun dari data PDRB
                    
                    'tahun_pmdn' => $latestPmdn ? $latestPmdn->tahun : 'N/A', // Ambil tahun dari data PDRB
                    'kawasan_industri' => $kawasanIndustriData,
                    'nilai_pma' => $latestPma ? number_format($latestPma->nilai_pma / 1000000, 2, ',', '.')  : 'N/A',
                    'nilai_pmdn' => $latestPmdn ? number_format($latestPmdn->nilai_pmdn / 1000000, 2, ',', '.')  : 'N/A',
                     
                    


                    'sektor_terbesar' => $pdrbPerSektor ? [
                        'nama_sektor' => $pdrbPerSektor->sektor->nama_sektor,
                        'nilai_pdrb_per_sektor' => number_format(round($pdrbPerSektor->nilai_pdrb_per_sektor, 3), 3),
                    ] : null, // Ambil nama sektor dan nilai PDRB jika ada
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

            $dataNasional = DataNasional::select('tahun', 'nilai_pmdn_nasional', 'nilai_pma_nasional', 'nilai_realisasi_investasi_nasional')
            ->orderBy('tahun', 'asc')
            ->get()
            ->map(function ($data) {
                return [
                    'tahun' => $data->tahun,
                    'nilai_pmdn_nasional' => number_format($data->nilai_pmdn_nasional / 1000000, 2, ',', '.'),
                    'nilai_pma_nasional' => number_format($data->nilai_pma_nasional / 1000000, 2, ',', '.'),
                    'nilai_realisasi_investasi_nasional' => number_format($data->nilai_realisasi_investasi_nasional / 1000000, 2, ',', '.'),
                ];
            });
        

        // dd($provinsi);
        // Render halaman InvesmentMap dengan data provinsi, kawasan industri, sektor, dan data nasional
        return Inertia::render('PetaInvestasi/PetaInvestasi', [
            'provinsi' => $provinsi,
            'sektorData' => $sektorData,
            'dataNasional' => $dataNasional, // Kirim semua data nasional ke view
        ]);
    }
}
