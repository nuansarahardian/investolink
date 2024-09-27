<?php

namespace App\Repositories;

use App\Interfaces\KomoditasRepositoryInterface;
use App\Models\Provinsi;
use App\Models\Komoditas;
use App\Models\KawasanIndustri;
use App\Models\Sektor;

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
     * Menyimpan data Komoditas
     * 
     * @param array $data
     */
    // public function store($data)
    // {
    //     return Komoditas::create($data);
    // }

    /**
     * Mengupdate data Komoditas berdasarkan ID
     * 
     * @param int $id
     * @param array $data
     */
    // public function update($id, array $data)
    // {
    //     $komoditas = Komoditas::findOrFail($id);
    //     $komoditas->update($data);

    //     return $komoditas;
    // }

    /**
     * Menghapus data Komoditas berdasarkan ID
     * 
     * @param int $id
     */
    // public function delete($id)
    // {
    //     $komoditas = Komoditas::findOrFail($id);
    //     $komoditas->delete();

    //     return $komoditas;
    // }

    /**
     * Menampilkan data Provinsi berdasarkan ID Komoditas
     * 
     * @param int $id
     */
    // public function showProvinsibyKomoditas($id)
    // {
    //     $provinsi = Provinsi::where('komoditasID', $id)->get();

    //     return $provinsi;
    // }

    /**
     * Menampilkan data Kawasan Industri berdasarkan ID Komoditas
     * 
     * @param int $id
     */
    // public function showKawasanIndustribyKomoditas($id)
    // {
    //     //
    // }
}
