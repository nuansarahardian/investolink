<?php

namespace App\Repositories;

use App\Interfaces\RealisasiInvestasiRepositoryInterface;
use App\Models\Provinsi;
use App\Models\Realisasi_Investasi;

class RealisasiInvestasiRepository implements RealisasiInvestasiRepositoryInterface
{
    /**
     * Menampilkan semua data PDRB
     *
     * @return mixed
     */
    public function index()
    {
        $data = Realisasi_Investasi::all();
        return $data;
    }

    /**
     * Menampilkan data PDRB berdasarkan ID
     * 
     * @param int $id
     */
    public function show($id)
    {
        $data = Realisasi_Investasi::findOrFail($id);
        return $data;
    }

    /**
     * Menampilkan data PDRB berdasarkan ID Provinsi
     * 
     * @param int $id
     */
    public function showRealisasiInvestasibyProvinsi($id)
    {
        $data = Realisasi_Investasi::where('provinsi_id', $id)->get();
        return $data;
    }
}
