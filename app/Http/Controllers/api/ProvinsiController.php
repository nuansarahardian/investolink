<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Provinsi;

class ProvinsiController extends Controller
{
    /**
     * Menampilkan data Provinsi
     */
    public function index()
    {
        $provinsi = Provinsi::all();
        return response()->json([
            'status' => 'success',
            'data' => $provinsi
        ]);
    }

    /**
     * Menampilkan data Provinsi berdasarkan ID
     */
    // public function show($id)
    // {
    //     $provinsi = Provinsi::find($id);
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
     * Menampilkan data Komoditas berdasarkan ID Provinsi
     */
    public function showKomoditasbyProvinsi($id)
    {
        $provinsi = Provinsi::with('komoditas')->find($id);
        if ($provinsi) {
            return response()->json([
                'status' => 'success',
                'data' => $provinsi
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Data provinsi tidak ditemukan'
            ], 404);
        }
    }

    /**
     * Menampilkan data Kawasan_Industri berdasarkan ID Provinsi
     */
    public function showKawasanIndustribyProvinsi($id)
    {
        $provinsi = Provinsi::with('kawasan_industri')->find($id);
        if ($provinsi) {
            return response()->json([
                'status' => 'success',
                'data' => $provinsi
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Data provinsi tidak ditemukan'
            ], 404);
        }
    }
}
