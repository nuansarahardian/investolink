<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PMAResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'PMA_id' => $this->PMA_id,
            'provinsi_id' => $this->provinsi_id,
            'tahun' => $this->tahun,
            'nilai_pma' => $this->nilai_pma,
        ];
    }
}
