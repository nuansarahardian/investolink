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
     * Menampilkan semua data Provinsi beserta PDRB
     *
     * @return mixed
     */
    public function index()
    {
        // Menggunakan eager loading untuk memuat relasi 'pdrb'
        $data = Provinsi::with('pdrb')->get(); 
        return $data;
    }

    /**
     * Menampilkan data Provinsi berdasarkan ID beserta PDRB
     * 
     * @param int $id
     * @return mixed
     */
    public function show($id)
    {
        // Menggunakan eager loading untuk memuat relasi 'pdrb' pada provinsi tertentu
        $data = Provinsi::with('pdrb')->findOrFail($id);
        return $data;
    }

    /**
     * Menampilkan data Provinsi berdasarkan ID Komoditas
     * 
     * @param int $id
     * @return mixed
     */
    public function showProvinsibyKomoditas($id)
    {
        // Mengambil ID provinsi yang memiliki komoditas tertentu
        $provinsiIDs = Provinsi_Komoditas::where('komoditas_id', $id)->pluck('provinsi_id');

        // Menggunakan eager loading untuk memuat relasi 'pdrb' pada provinsi yang terkait dengan komoditas
        $data = Provinsi::with('pdrb')->whereIn('provinsi_id', $provinsiIDs)->get();
        return $data;
    }
}
