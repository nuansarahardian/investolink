<?php

namespace App\Http\Controllers;

use App\Models\Provinsi;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TabelProvinsiController extends Controller
{
    public function index()
    {
        // Mengambil semua provinsi beserta jumlah kawasan industri dan kawasan ekonomi khusus
        $provinsi = Provinsi::withCount([
            'kawasan_industri as jumlah_kawasan_industri',
            'kawasan_industri as jumlah_kek' => function ($query) {
                $query->where('is_kawasan_ekonomi_khusus', true);
            }
        ])->get();

        // Mengirim data ke halaman Inertia
        return Inertia::render('TabelProvinsi', [
            'provinsi' => $provinsi,
        ]);
    }
}
