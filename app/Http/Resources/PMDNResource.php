<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PMDNResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'PMDN_id' => $this->PMDN_id,
            'provinsi_id' => $this->provinsi_id,
            'tahun' => $this->tahun,
            'nilai_pmdn' => $this->nilai_pmdn,
        ];
    }
}
