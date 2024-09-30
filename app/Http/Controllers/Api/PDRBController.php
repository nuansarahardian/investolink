<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PDRB;
use App\Interfaces\PDRBRepositoryInterface;
use App\Http\Resources\PDRBResource;
use App\Classes\ApiResponseClass;

class PDRBController extends Controller
{
    private PDRBRepositoryInterface $pdrbRepositoryInterface;

    public function __construct(PDRBRepositoryInterface $pdrbRepositoryInterface)
    {
        $this->pdrbRepositoryInterface = $pdrbRepositoryInterface;
    }

    /**
     * Menampilkan data PDRB
     */
    public function index()
    {
        $data = $this->pdrbRepositoryInterface->index();

        if ($data) {
            return ApiResponseClass::success(PDRBResource::collection($data), 'Data PDRB berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data PDRB tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data PDRB berdasarkan ID
     */
    public function show($id)
    {
        $data = $this->pdrbRepositoryInterface->getById($id);

        if ($data) {
            return ApiResponseClass::success(new PDRBResource($data), 'Data PDRB berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data PDRB tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data PDRB berdasarkan ID Provinsi
     */
    public function showPDRBbyProvinsi($id)
    {
        $data = $this->pdrbRepositoryInterface->showPDRBbyProvinsi($id);

        if ($data) {
            return ApiResponseClass::success(PDRBResource::collection($data), 'Data PDRB berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data PDRB tidak ditemukan', 404);
        }
    }
}
