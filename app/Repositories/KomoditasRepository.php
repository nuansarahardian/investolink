<?php

namespace App\Repositories;

use App\Interfaces\KomoditasRepositoryInterface;
use App\Models\Provinsi;
use App\Models\Komoditas;
use App\Models\KawasanIndustri;
use App\Models\Sektor;
use App\Models\Provinsi_Komoditas;

class KomoditasRepository implements KomoditasRepositoryInterface
{
    /**
     * Menampilkan semua data Komoditas
     *
     * @return mixed
     */
    public function index()
    {
        return Komoditas::all();
    }

    /**
     * Menampilkan data Komoditas berdasarkan ID
     * 
     * @param int $id
     */
    public function show($id)
    {
        return Komoditas::findOrFail($id);
    }

    /**
     * Menampilkan data Komoditas berdasarkan ID Provinsi
     * 
     * @param int $id
     */
    public function showKomoditasbyProvinsi($id)
    {
        $komoditasIDs = Provinsi_Komoditas::where('provinsiID', $id)->pluck('komoditasID');
        $data = Komoditas::whereIn('komoditasID', $komoditasIDs)->get();
        return $data;
    }

    /**
     * Menampilkan data Komoditas berdasarkan ID Sektor
     * 
     * @param int $id
     */
    public function showKomoditasbySektor($id)
    {
        $data = Komoditas::where('sektorID', $id)->get();
        return $data;
    }

    /**
     * Menampilkan data Komoditas berdasarkan ID Provinsi dan ID Sektor
     * 
     * @param int $provinsi_id
     * @param int $sektor_id
     */
    public function showKomoditasbyProvinsiandSektor($provinsi_id, $sektor_id)
    {
        $komoditasIDs = Provinsi_Komoditas::where('provinsiID', $provinsi_id)->pluck('komoditasID');
        $data = Komoditas::whereIn('komoditasID', $komoditasIDs)->where('sektorID', $sektor_id)->get();
        return $data;
    }
}
