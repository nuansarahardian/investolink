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
}
