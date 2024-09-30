<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sektor;
use App\Interfaces\SektorRepositoryInterface;
use App\Http\Resources\SektorResource;
use App\Classes\ApiResponseClass;

class SektorController extends Controller
{
    private SektorRepositoryInterface $sektorRepositoryInterface;

    public function __construct(SektorRepositoryInterface $sektorRepositoryInterface)
    {
        $this->sektorRepositoryInterface = $sektorRepositoryInterface;
    }

    /**
     * Menampilkan data Sektor
     */
    public function index()
    {
        $data = $this->sektorRepositoryInterface->index();

        if ($data) {
            return ApiResponseClass::success(SektorResource::collection($data), 'Data sektor berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data sektor tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data Sektor berdasarkan ID
     */
    public function show($id)
    {
        $data = $this->sektorRepositoryInterface->getById($id);

        if ($data) {
            return ApiResponseClass::success(new SektorResource($data), 'Data sektor berhasil diambil', 200);
        } else {
            return ApiResponseClass::error('Data sektor tidak ditemukan', 404);
        }
    }

    /**
     * Menampilkan data Provinsi berdasarkan ID Sektor
     */
    // public function showProvinsibySektor($id)
    // {
    //     $sektor = Sektor::with('provinsi')->find($id);
    //     if ($sektor) {
    //         return response()->json([
    //             'status' => 'success',
    //             'data' => $sektor
    //         ]);
    //     } else {
    //         return response()->json([
    //             'status' => 'error',
    //             'message' => 'Data sektor tidak ditemukan'
    //         ], 404);
    //     }
    // }

    /**
     * Menampilkan data Komoditas berdasarkan ID Sektor
     */
    // public function showKomoditasbySektor($id)
    // {
    //     $sektor = Sektor::with('komoditas')->find($id);
    //     if ($sektor) {
    //         return response()->json([
    //             'status' => 'success',
    //             'data' => $sektor
    //         ]);
    //     } else {
    //         return response()->json([
    //             'status' => 'error',
    //             'message' => 'Data sektor tidak ditemukan'
    //         ], 404);
    //     }
    // }
}
