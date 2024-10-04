<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Provinsi;
use Inertia\Inertia;

class GeoMapController extends Controller
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

        // Render halaman InvesmentMap dengan data provinsi
        return Inertia::render('InvesmentMap', [
            'provinsi' => $provinsi,
        ]);
    }
}
