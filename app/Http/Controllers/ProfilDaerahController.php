<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Provinsi;
use Inertia\Inertia;

class ProfilDaerahController extends Controller
{
    public function show($provinsi_id)
{
    $provinsi = Provinsi::with(['pdrb', 'kawasan_industri'])
        ->where('provinsi_id', $provinsi_id)
        ->firstOrFail();

    $provinsiData = [
        'provinsi_id' => $provinsi->provinsi_id,
        'nama_provinsi' => $provinsi->nama_provinsi,
        'populasi' => $provinsi->populasi,
        'luas_area' => $provinsi->luas_area,
        'upah_minimum_provinsi' => $provinsi->upah_minimum_provinsi,
        'nilai_ekspor' => $provinsi->nilai_ekspor,
        'nilai_impor' => $provinsi->nilai_impor,
        'pdrb' => $provinsi->pdrb,
        'kawasan_industri' => $provinsi->kawasan_industri,
    ];

    return Inertia::render('ProfilDaerah', ['provinsi' => $provinsiData]);
}

}
