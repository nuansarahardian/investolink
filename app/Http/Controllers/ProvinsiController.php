<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
    public function show($id)
    {
        $provinsi = Provinsi::find($id);
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
