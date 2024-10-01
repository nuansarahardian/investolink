<?php

namespace App\Http\Controllers\petaInvestasi;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http; // Import the Http Facade
use Illuminate\Http\Request;

class ProvinsiController extends Controller
{
    // Function to fetch data from the Provinsi API
    public function getProvinsi()
    {
        $response = Http::get('http://127.0.0.1:8000/api/provinsi');

        if ($response->successful()) {
            return response()->json($response->json());
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch province data',
            ], 500);
        }
    }

    // Function to fetch data from the Provinsi API and include PDRB data directly
    public function getProvinsiWithPdrb()
    {
        $response = Http::get('http://127.0.0.1:8000/api/provinsi');

        if ($response->successful()) {
            $provinsiData = $response->json()['data'];

            // Format and return combined data with PDRB details
            $combinedData = [];

            foreach ($provinsiData as $provinsi) {
                $combinedData[] = [
                    'provinsi_id' => $provinsi['provinsi_id'],
                    'nama_provinsi' => $provinsi['nama_provinsi'],
                    'luas_area' => $provinsi['luas_area'],
                    'populasi' => $provinsi['populasi'],
                    'upah_minimum_provinsi' => $provinsi['upah_minimum_provinsi'],
                    'website' => $provinsi['website'],
                    'nilai_ekspor' => $provinsi['nilai_ekspor'],
                    'nilai_impor' => $provinsi['nilai_impor'],
                    'pdrb' => $provinsi['pdrb'] // Include PDRB data directly
                ];
            }

            return response()->json([
                'status' => 'success',
                'message' => 'Data combined successfully with PDRB',
                'data' => $combinedData,
            ]);
        } else {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to fetch province and PDRB data',
            ], 500);
        }
    }
}
