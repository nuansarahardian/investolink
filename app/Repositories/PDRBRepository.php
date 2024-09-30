<?php

namespace App\Repositories;

use App\Interfaces\PDRBRepositoryInterface;
use App\Models\Provinsi;
use App\Models\PDRB;

class PDRBRepository implements PDRBRepositoryInterface
{
    /**
     * Menampilkan semua data PDRB
     *
     * @return mixed
     */
    public function index()
    {
        $data = PDRB::all();
        return $data;
    }

    /**
     * Menampilkan data PDRB berdasarkan ID
     * 
     * @param int $id
     */
    public function show($id)
    {
        $data = PDRB::findOrFail($id);
        return $data;
    }

    /**
     * Menampilkan data PDRB berdasarkan ID Provinsi
     * 
     * @param int $id
     */
    public function showPDRBbyProvinsi($id)
    {
        $data = PDRB::where('provinsi_id', $id)->get();
        return $data;
    }
}
