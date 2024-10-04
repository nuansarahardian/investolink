<?php

namespace App\Http\Controllers;

use App\Models\Sektor;
use App\Models\Provinsi;
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
                $query->select('kawasan_industri_id', 'provinsi_id', 'is_kawasan_ekonomi_khusus'); // Ambil kolom yang dibutuhkan
            }])
            ->get() // Ambil semua data provinsi
            ->map(function ($province) {
                // Ambil nilai PDRB untuk tahun 2023
                $pdrbTahun2023 = $province->pdrb->first(); // Ambil data PDRB tahun 2023 yang pertama
                
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
                ];
            });


          $sektorData = Sektor::with(['komoditas.provinsi'])->get()
    ->map(function ($sektor) {
        // Menghitung jumlah provinsi di mana setiap sektor ada melalui komoditas
        $provinsiIds = $sektor->komoditas->flatMap(function ($komoditas) {
            return $komoditas->provinsi->pluck('provinsi_id');
        })->unique();

        // Membentuk struktur data yang akan dikirim ke view
        return [
            'nama_sektor' => $sektor->nama_sektor,
            'jumlah_provinsi' => $provinsiIds->count(),
            'komoditas' => $sektor->komoditas->map(function ($komoditas) {
                return [
                    'nama_komoditas' => $komoditas->nama_komoditas,
                    'provinsi' => $komoditas->provinsi->map(function ($provinsi) {
                        return $provinsi->nama_provinsi;
                    }),
                ];
            }),
        ];
    });

// // Debug setelah data sektor terbentuk
// dd($sektorData);

        // Render halaman InvesmentMap dengan data provinsi
        return Inertia::render('InvesmentMap', [
            'provinsi' => $provinsi,
            'sektorData' => $sektorData,
        ]);
    }
}
