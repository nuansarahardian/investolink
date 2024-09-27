<?php

namespace App\Repositories;

use App\Interfaces\ProvinsiRepositoryInterface;
use App\Models\Provinsi;
use App\Models\Komoditas;
use App\Models\KawasanIndustri;
use App\Models\Sektor;

class ProvinsiRepository implements ProvinsiRepositoryInterface
{
    /**
     * Menampilkan semua data Provinsi
     *
     * @return mixed
     */
    public function index()
    {
        return Provinsi::all();
    }

    /**
     * Menampilkan data Provinsi berdasarkan ID
     * 
     * @param int $id
     */
    public function show($id)
    {
        return Provinsi::findOrFail($id);
    }

    /**
     * Menyimpan data Provinsi
     * 
     * @param array $data
     */
    // public function store($data)
    // {
    //     return Provinsi::create($data);
    // }

    /**
     * Mengupdate data Provinsi berdasarkan ID
     * 
     * @param int $id
     * @param array $data
     */
    // public function update($id, array $data)
    // {
    //     $provinsi = Provinsi::findOrFail($id);
    //     $provinsi->update($data);

    //     return $provinsi;
    // }

    /**
     * Menghapus data Provinsi berdasarkan ID
     * 
     * @param int $id
     */
    // public function delete($id)
    // {
    //     $provinsi = Provinsi::findOrFail($id);
    //     $provinsi->delete();

    //     return $provinsi;
    // }

    /**
     * Menampilkan data Komoditas berdasarkan ID Provinsi
     * 
     * @param int $id
     */
    // public function showKomoditasbyProvinsi($id)
    // {
    //     $komoditas = Komoditas::where('provinsiID', $id)->get();

    //     return $komoditas;
    // }

    /**
     * Menampilkan data Sektor berdasarkan ID Provinsi
     * 
     * @param int $id
     */
    // public function showSektorbyProvinsi($id)
    // {
    //     $sektor = ProvinsiKomoditas::where('provinsiID', $id)
    //     ->with('komoditas.sektor') 
    //     ->get()
    //     ->pluck('komoditas.sektor')
    //     ->unique('id');

    //     return $sektor;
    // }

    /**
     * Menampilkan data Kawasan Industri berdasarkan ID Provinsi
     * 
     * @param int $id
     */
    // public function showKawasanIndustribyProvinsi($id)
    // {
    //     $kawasanIndustri = KawasanIndustri::where('provinsiID', $id)->get();
        
    //     return $kawasanIndustri;
    // }
}
