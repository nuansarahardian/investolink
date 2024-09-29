<?php

namespace App\Repositories;

use App\Interfaces\KawasanIndustriRepositoryInterface;
use App\Models\Provinsi;
use App\Models\Komoditas;
use App\Models\Kawasan_Industri;
use App\Models\Sektor;

class KawasanIndustriRepository implements KawasanIndustriRepositoryInterface
{
    /**
     * Menampilkan semua data Kawasan Industri
     *
     * @return mixed
     */
    public function index()
    {
        return Kawasan_Industri::all();
    }

    /**
     * Menampilkan data Sektor berdasarkan ID
     * 
     * @param int $id
     */
    public function show($id)
    {
        return Sektor::findOrFail($id);
    }

    /**
     * Menampilkan data Kawasan Industri berdasarkan ID Provinsi
     * 
     * @param int $id
     */
    public function showKawasanIndustribyProvinsi($id)
    {
        $data = Kawasan_Industri::where('provinsiID', $id)->get();
        return $data;
    }
}
