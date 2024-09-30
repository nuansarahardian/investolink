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
            'kawasan_industri' => $this->kawasan_industri,
            'provinsi_id' => $this->provinsi_id,
            'nama_kawasan_industri' => $this->nama_kawasan_industri,
            'is_kawasan_ekonomi_khusus' => $this->is_kawasan_ekonomi_khusus,
        ];
    }
}
