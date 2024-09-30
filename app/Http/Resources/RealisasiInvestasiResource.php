<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RealisasiInvestasiResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'realisasi_investasi_id' => $this->realisasi_investasi_id,
            'provinsi_id' => $this->provinsi_id,
            'tahun' => $this->tahun,
            'nilai_realiasi_investasi' => $this->nilai_realiasi_investasi,
        ];
    }
}
