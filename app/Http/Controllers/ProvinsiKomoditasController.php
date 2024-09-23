<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProvinsiKomoditas;

class ProvinsiKomoditasController extends Controller
{
    /*
    *   Menampilkan data Komoditas berdasarkan Provinsi
    */
    public function showKomoditasbyProvinsi($id)
    {
        $provinsi = Provinsi::with('komoditas')->find($provinsiID);

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

    /*
    *   Menampilkan data Provinsi berdasarkan Komoditas
    */
    public function showProvinsibyKomoditas($id)
    {
        $komoditas = Komoditas::with('provinsi')->find($komoditasID);

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
