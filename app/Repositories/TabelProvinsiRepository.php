<?php 

namespace App\Repositories;

use App\Repositories\Interfaces\TabelProvinsiRepositoryInterface;
use Illuminate\Support\Facades\Http;

class TabelProvinsiRepository implements TabelProvinsiRepositoryInterface
{
    public function getProvincesData()
    {
        // Fetch provinces
        $response = Http::get('http://127.0.0.1:8000/api/provinsi');
        $provinces = $response->json()['data'] ?? [];

        // Initialize an array to hold the results
        $result = [];

        // Loop through each province and fetch the industrial zones and special economic zones
        foreach ($provinces as $province) {
            $provinsiId = $province['provinsi_id'];

            // Count industrial zones
            $kawasanIndustriResponse = Http::get("http://127.0.0.1:8000/api/kawasan_industri/provinsi/{$provinsiId}");
            $kawasanIndustriCount = count($kawasanIndustriResponse->json()['data'] ?? []);

            // Count special economic zones
            $kekResponse = Http::get("http://127.0.0.1:8000/api/kawasan_industri/kek/provinsi/{$provinsiId}");
            $kekCount = count($kekResponse->json()['data'] ?? []);

            // Add to result
            $result[] = [
                'provinsi' => $province['nama_provinsi'],
                'kawasanIndustri' => $kawasanIndustriCount,
                'kek' => $kekCount,
            ];
        }

        return $result;
    }
}
