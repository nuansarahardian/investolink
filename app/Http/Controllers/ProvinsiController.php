<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller; 
use App\Models\Provinsi;
use App\Interfaces\ProvinsiRepositoryInterface;
use App\Http\Resources\ProvinsiResource;
use App\Classes\ApiResponseClass;

class ProvinsiController extends Controller
{
    private ProvinsiRepositoryInterface $provinsiRepositoryInterface;

    public function __construct(ProvinsiRepositoryInterface $provinsiRepositoryInterface)
    {
        $this->provinsiRepositoryInterface = $provinsiRepositoryInterface;
    }

    /**
     * Menampilkan data Provinsi
     */
    public function index()
    {
        $data = $this->provinsiRepositoryInterface->index();

        if ($data) {
            return ApiResponseClass::success(ProvinsiResource::collection($data), 'Data provinsi berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data provinsi tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data Provinsi berdasarkan ID
     */
    public function show($id)
    {
        $data = $this->provinsiRepositoryInterface->getById($id);

        if ($data) {
            return ApiResponseClass::success(new ProvinsiResource($data), 'Data provinsi berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data provinsi tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data Provinsi berdasarkan ID Komoditas
     */
    public function showProvinsibyKomoditas($id)
    {
        $data = $this->provinsiRepositoryInterface->showProvinsibyKomoditas($id);

        if ($data) {
            return ApiResponseClass::success(ProvinsiResource::collection($data), 'Data provinsi berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data provinsi tidak ditemukan', 404);
        }
    }
}
