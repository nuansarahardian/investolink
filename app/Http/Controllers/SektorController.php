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
    public function show($id)
    {
        $sektor = Sektor::find($id);
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
