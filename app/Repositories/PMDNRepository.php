<?php

namespace App\Repositories;

use App\Interfaces\PMDNRepositoryInterface;
use App\Models\Provinsi;
use App\Models\PMDN;

class PMDNRepository implements PMDNRepositoryInterface
{
    /**
     * Menampilkan semua data PMDN
     *
     * @return mixed
     */
    public function index()
    {
        $data = PMDN::all();
        return $data;
    }

    /**
     * Menampilkan data PMDN berdasarkan ID
     * 
     * @param int $id
     */
    public function show($id)
    {
        $data = PMDN::findOrFail($id);
        return $data;
    }

    /**
     * Menampilkan data PMDN berdasarkan ID Provinsi
     * 
     * @param int $id
     */
    public function showPMDNbyProvinsi($id)
    {
        $data = PMDN::where('provinsi_id', $id)->get();
        return $data;
    }
}
