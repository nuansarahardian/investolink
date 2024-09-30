<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProvinsiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'provinsi_id' => $this->provinsi_id,
            'nama_provinsi' => $this->nama_provinsi,
            'luas_area' => $this->luas_area,
            'email' => $this->email,
            'website' => $this->website,
            'nomor_handphone' => $this->nomor_handphone,
            'populasi' => $this->populasi,
            'upah_minimum_provinsi' => $this->upah_minimum_provinsi,
            'link_terkait' => $this->link_terkait,
            'nilai_ekspor' => $this->nilai_ekspor,
            'nilai_impor' => $this->nilai_impor,
        ];
    }
}
