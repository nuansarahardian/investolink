<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PDRBResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'PDRB_id' => $this->PDRB_id,
            'provinsi_id' => $this->provinsi_id,
            'tahun' => $this->tahun,
            'nilai_pdrb_konstan' => $this->nilai_pdrb_konstan,
            'nilai_pdrb_berlaku' => $this->nilai_pdrb_berlaku,
        ];
    }
}
