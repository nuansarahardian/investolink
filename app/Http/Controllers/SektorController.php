<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sektor;

class SektorController extends Controller
{
    /**
     * Menampilkan data Sektor
     */
    public function index()
    {
        $sektor = Sektor::all();
        return response()->json([
            'status' => 'success',
            'data' => $sektor
        ]);
    }

    /**
     * Menampilkan data Sektor berdasarkan ID
     */
    // public function show($id)
    // {
    //     $sektor = Sektor::find($id);
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
     * Menampilkan data Provinsi berdasarkan ID Sektor
     */
    public function showProvinsibySektor($id)
    {
        $sektor = Sektor::with('provinsi')->find($id);
        if ($sektor) {
            return response()->json([
                'status' => 'success',
                'data' => $sektor
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Data sektor tidak ditemukan'
            ], 404);
        }
    }

    /**
     * Menampilkan data Komoditas berdasarkan ID Sektor
     */
    public function showKomoditasbySektor($id)
    {
        $sektor = Sektor::with('komoditas')->find($id);
        if ($sektor) {
            return response()->json([
                'status' => 'success',
                'data' => $sektor
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Data sektor tidak ditemukan'
            ], 404);
        }
    }
}
