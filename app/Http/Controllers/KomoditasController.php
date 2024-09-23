<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class KomoditasController extends Controller
{
    /**
     * Menampilkan data Komoditas
     */
    public function index()
    {
        $komoditas = Komoditas::all();
        return response()->json([
            'status' => 'success',
            'data' => $komoditas
        ]);
    }

    /**
     * Menampilkan data komoditas berdasarkan ID
     */
    public function show($id)
    {
        $komoditas = Komoditas::find($id);
        if ($komoditas) {
            return response()->json([
                'status' => 'success',
                'data' => $komoditas
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Data komoditas tidak ditemukan'
            ], 404);
        }
    }
}
