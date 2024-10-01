<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KawasanIndustriResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'kawasan_industri_id' => $this->kawasan_industri_id,
            'provinsi_id' => $this->provinsi_id,
            'nama_kawasan_industri' => $this->nama_kawasan_industri,
            'kabupaten_atau_kota' => $this->kabupaten_atau_kota,
            'luas_lahan' => $this->luas_lahan,
            'latitude' => $this->latitude,
            'longitude' => $this->longitude,
            'target_investasi' => $this->target_investasi,
            'industri' => $this->industri,
            'is_kawasan_ekonomi_khusus' => $this->is_kawasan_ekonomi_khusus,
        ];
    }
}
