<?php

namespace App\Repositories;

use App\Interfaces\SektorRepositoryInterface;
use App\Models\Provinsi;
use App\Models\Komoditas;
use App\Models\KawasanIndustri;
use App\Models\Sektor;

class SektorRepository implements SektorRepositoryInterface
{
    /**
     * Menampilkan semua data Sektor
     *
     * @return mixed
     */
    public function index()
    {
        return Sektor::all();
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

    /**
     * Menampilkan data Provinsi berdasarkan ID Sektor
     * 
     * @param int $id
     */
    // public function showProvinsibySektor($id)
    // {
    //     $provinsi = Provinsi::whereHas('provinsiKomoditas', function ($query) use ($id) {
    //         $query->whereHas('komoditas', function ($komoditasQuery) use ($id) {
    //             $komoditasQuery->where('sektor_id', $id);
    //         });
    //     })->get();
    
    //     return $provinsi;
    // }

    /**
     * Menampilkan data Komoditas berdasarkan ID Sektor
     * 
     * @param int $id
     */
    // public function showKomoditasbySektor($id)
    // {
    //     $komoditas = Sektor::where('sektorID', $id)->get();

    //     return $komoditas;
    // }

    /**
     * Menampilkan data Kawasan Industri berdasarkan ID Sektor
     * 
     * @param int $id
     */
    // public function showKawasanIndustribySektor($id)
    // {
    //     //
    // }
}
