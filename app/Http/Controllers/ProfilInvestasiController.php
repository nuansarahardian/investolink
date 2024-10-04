<?php

namespace App\Http\Controllers;

use App\Models\Sektor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfilInvestasiController extends Controller
{
    public function index()
    {
        // Mengambil data sektor beserta komoditas dan provinsi terkait
        $sektorData = Sektor::with(['komoditas.provinsi'])
            ->get()
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

        // Menggunakan Inertia untuk menampilkan data ke view
        return Inertia::render('InvesmentMap', [
            'sektorData' => $sektorData,
        ]);
    }
}
