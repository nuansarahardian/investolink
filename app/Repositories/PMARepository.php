<?php

namespace App\Repositories;

use App\Interfaces\PMARepositoryInterface;
use App\Models\Provinsi;
use App\Models\PMA;

class PMARepository implements PMARepositoryInterface
{
    /**
     * Menampilkan semua data PMA
     *
     * @return mixed
     */
    public function index()
    {
        $data = PMA::all();
        return $data;
    }

    /**
     * Menampilkan data PMA berdasarkan ID
     * 
     * @param int $id
     */
    public function show($id)
    {
        $data = PMA::findOrFail($id);
        return $data;
    }

    /**
     * Menampilkan data PMA berdasarkan ID Provinsi
     * 
     * @param int $id
     */
    public function showPMAbyProvinsi($id)
    {
        $data = PMA::where('provinsi_id', $id)->get();
        return $data;
    }
}
