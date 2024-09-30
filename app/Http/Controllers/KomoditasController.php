<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Komoditas;
use App\Interfaces\KomoditasRepositoryInterface;
use App\Http\Resources\KomoditasResource;
use App\Classes\ApiResponseClass;

class KomoditasController extends Controller
{
    private KomoditasRepositoryInterface $komoditasRepositoryInterface;

    public function __construct(KomoditasRepositoryInterface $komoditasRepositoryInterface)
    {
        $this->komoditasRepositoryInterface = $komoditasRepositoryInterface;
    }

    /**
     * Menampilkan data Komoditas
     */
    public function index()
    {
        $data = $this->komoditasRepositoryInterface->index();

        if ($data) {
            return ApiResponseClass::success(KomoditasResource::collection($data), 'Data komoditas berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data komoditas tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data komoditas berdasarkan ID
     */
    public function show($id)
    {
        $data = $this->komoditasRepositoryInterface->getById($id);

        if ($data) {
            return ApiResponseClass::success(new KomoditasResource($data), 'Data komoditas berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data komoditas tidak ditemukan', 404);
        }
    }






    /**
     * Menampilkan data Komoditas berdasarkan ID Provinsi
     */
    public function showKomoditasbyProvinsi($id)
    {
        $data = $this->komoditasRepositoryInterface->showKomoditasbyProvinsi($id);

        if ($data) {
            return ApiResponseClass::success(KomoditasResource::collection($data), 'Data komoditas berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data komoditas tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data Komoditas berdasarkan ID Sektor
     */
    public function showKomoditasbySektor($id)
    {
        $data = $this->komoditasRepositoryInterface->showKomoditasbySektor($id);

        if ($data) {
            return ApiResponseClass::success(KomoditasResource::collection($data), 'Data komoditas berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data komoditas tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data Komoditas berdasarkan ID Provinsi dan ID Sektor
     */
    public function showKomoditasbyProvinsiandSektor($provinsi_id, $sektor_id)
    {
        $data = $this->komoditasRepositoryInterface->showKomoditasbyProvinsiandSektor($provinsi_id, $sektor_id);

        if ($data) {
            return ApiResponseClass::success(KomoditasResource::collection($data), 'Data komoditas berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data komoditas tidak ditemukan', 404);
        }
    }
}
