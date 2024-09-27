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
     * Menyimpan data Sektor
     * 
     * @param array $data
     */
    // public function store($data)
    // {
    //     return Sektor::create($data);
    // }

    /**
     * Mengupdate data Sektor berdasarkan ID
     * 
     * @param int $id
     * @param array $data
     */
    // public function update($id, array $data)
    // {
    //     $sektor = Sektor::findOrFail($id);
    //     $sektor->update($data);

    //     return $sektor;
    // }

    /**
     * Menghapus data Sektor berdasarkan ID
     * 
     * @param int $id
     */
    // public function delete($id)
    // {
    //     $sektor = Sektor::findOrFail($id);
    //     $sektor->delete();

    //     return $sektor;
    // }
}
