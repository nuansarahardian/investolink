<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PMA;
use App\Interfaces\PMARepositoryInterface;
use App\Http\Resources\PMAResource;
use App\Classes\ApiResponseClass;

class PMAController extends Controller
{
    private PMARepositoryInterface $pmaRepositoryInterface;

    public function __construct(PMARepositoryInterface $pmaRepositoryInterface)
    {
        $this->pmaRepositoryInterface = $pmaRepositoryInterface;
    }

    /**
     * Menampilkan data PMA
     */
    public function index()
    {
        $data = $this->pmaRepositoryInterface->index();

        if ($data) {
            return ApiResponseClass::success(PMAResource::collection($data), 'Data PMA berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data PMA tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data PMA berdasarkan ID
     */
    public function show($id)
    {
        $data = $this->pmaRepositoryInterface->getById($id);

        if ($data) {
            return ApiResponseClass::success(new PMAResource($data), 'Data PMA berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data PMA tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data PMA berdasarkan ID Provinsi
     */
    public function showPMAbyProvinsi($id)
    {
        $data = $this->pmaRepositoryInterface->showPMAbyProvinsi($id);

        if ($data) {
            return ApiResponseClass::success(PMAResource::collection($data), 'Data PMA berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data PMA tidak ditemukan', 404);
        }
    }
}
