<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KawasanIndustri;
use App\Interfaces\KawasanIndustriRepositoryInterface;
use App\Http\Resources\KawasanIndustriResource;
use App\Classes\ApiResponseClass;

class KawasanIndustriController extends Controller
{
    private KawasanIndustriRepositoryInterface $kawasanIndustriRepositoryInterface;

    public function __construct(KawasanIndustriRepositoryInterface $kawasanIndustriRepositoryInterface)
    {
        $this->kawasanIndustriRepositoryInterface = $kawasanIndustriRepositoryInterface;
    }

    /**
     * Menampilkan data Kawasan Industri
     */
    public function index()
    {
        $data = $this->kawasanIndustriRepositoryInterface->index();

        if ($data) {
            return ApiResponseClass::success(KawasanIndustriResource::collection($data), 'Data kawasan industri berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data kawasan industri tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data Kawasan Industri berdasarkan ID
     */
    public function show($id)
    {
        $data = $this->kawasanIndustriRepositoryInterface->getById($id);

        if ($data) {
            return ApiResponseClass::success(new KawasanIndustriResource($data), 'Data kawasan industri berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data kawasan industri tidak ditemukan', 404);
        }
    }
}
