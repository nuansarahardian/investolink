<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PMDN;
use App\Interfaces\PMDNRepositoryInterface;
use App\Http\Resources\PMDNResource;
use App\Classes\ApiResponseClass;

class PMDNController extends Controller
{
    private PMDNRepositoryInterface $pmdnRepositoryInterface;

    public function __construct(PMDNRepositoryInterface $pmdnRepositoryInterface)
    {
        $this->pmdnRepositoryInterface = $pmdnRepositoryInterface;
    }

    /**
     * Menampilkan data PMDN
     */
    public function index()
    {
        $data = $this->pmdnRepositoryInterface->index();

        if ($data) {
            return ApiResponseClass::success(PMDNResource::collection($data), 'Data PMDN berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data PMDN tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data PMDN berdasarkan ID
     */
    public function show($id)
    {
        $data = $this->pmdnRepositoryInterface->getById($id);

        if ($data) {
            return ApiResponseClass::success(new PMDNResource($data), 'Data PMDN berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data PMDN tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data PMDN berdasarkan ID Provinsi
     */
    public function showPMDNbyProvinsi($id)
    {
        $data = $this->pmdnRepositoryInterface->showPMDNbyProvinsi($id);

        if ($data) {
            return ApiResponseClass::success(PMDNResource::collection($data), 'Data PMDN berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data PMDN tidak ditemukan', 404);
        }
    }
}
