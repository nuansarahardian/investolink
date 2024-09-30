<?php

namespace App\Repositories;

use App\Interfaces\ProvinsiRepositoryInterface;
use App\Models\Provinsi;
use App\Models\Komoditas;
use App\Models\KawasanIndustri;
use App\Models\Sektor;
use App\Models\Provinsi_Komoditas;

class ProvinsiRepository implements ProvinsiRepositoryInterface
{
    /**
     * Menampilkan semua data Provinsi
     *
     * @return mixed
     */
    public function index()
    {
        $data = Provinsi::all(); 
        return $data;
    }

    /**
     * Menampilkan data Provinsi berdasarkan ID
     * 
     * @param int $id
     */
    public function show($id)
    {
        $data = Provinsi::findOrFail($id);
        return $data;
    }

    /**
     * Menampilkan data Provinsi berdasarkan ID Komoditas
     * 
     * @param int $id
     */
    public function showProvinsibyKomoditas($id)
    {
        $provinsiIDs = Provinsi_Komoditas::where('komoditas_id', $id)->pluck('provinsi_id');
        $data = Provinsi::whereIn('provinsi_id', $provinsiIDs)->get();
        return $data;
    }
}
