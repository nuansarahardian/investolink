<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
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
     * Menampilkan data Komoditas berdasarkan ID Provinsi
     */
    // public function showKomoditasbyProvinsi($id)
    // {
    //     $provinsi = Provinsi::with('komoditas')->find($id);
    //     if ($provinsi) {
    //         return response()->json([
    //             'status' => 'success',
    //             'data' => $provinsi
    //         ]);
    //     } else {
    //         return response()->json([
    //             'status' => 'error',
    //             'message' => 'Data provinsi tidak ditemukan'
    //         ], 404);
    //     }
    // }

    /**
     * Menampilkan data Kawasan_Industri berdasarkan ID Provinsi
     */
    // public function showKawasanIndustribyProvinsi($id)
    // {
    //     $provinsi = Provinsi::with('kawasan_industri')->find($id);
    //     if ($provinsi) {
    //         return response()->json([
    //             'status' => 'success',
    //             'data' => $provinsi
    //         ]);
    //     } else {
    //         return response()->json([
    //             'status' => 'error',
    //             'message' => 'Data provinsi tidak ditemukan'
    //         ], 404);
    //     }
    // }
}
