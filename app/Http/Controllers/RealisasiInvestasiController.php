<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\RealiasasiInvestasi;
use App\Interfaces\RealisasiInvestasiRepositoryInterface;
use App\Http\Resources\RealisasiInvestasiResource;
use App\Classes\ApiResponseClass;

class RealisasiInvestasiController extends Controller
{
    private RealisasiInvestasiRepositoryInterface $realisasiInvestasiRepositoryInterface;

    public function __construct(RealisasiInvestasiRepositoryInterface $realisasiInvestasiRepositoryInterface)
    {
        $this->realisasiInvestasiRepositoryInterface = $realisasiInvestasiRepositoryInterface;
    }

    /**
     * Menampilkan data Realisasi Investasi
     */
    public function index()
    {
        $data = $this->realisasiInvestasiRepositoryInterface->index();

        if ($data) {
            return ApiResponseClass::success(RealisasiInvestasiResource::collection($data), 'Data Realisasi Investasi berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data Realisasi Investasi tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data Realisasi Investasi berdasarkan ID
     */
    public function show($id)
    {
        $data = $this->realisasiInvestasiRepositoryInterface->getById($id);

        if ($data) {
            return ApiResponseClass::success(new RealisasiInvestasiResource($data), 'Data Realisasi Investasi berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data Realisasi Investasi tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data Realisasi Investasi berdasarkan ID Provinsi
     */
    public function showRealisasiInvestasibyProvinsi($id)
    {
        $data = $this->realisasiInvestasiRepositoryInterface->showRealisasiInvestasibyProvinsi($id);

        if ($data) {
            return ApiResponseClass::success(RealisasiInvestasiResource::collection($data), 'Data Realisasi Investasi berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data Realisasi Investasi tidak ditemukan', 404);
        }
    }
}
