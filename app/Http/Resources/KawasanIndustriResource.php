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
            'KIID' => $this->KIID,
            'provinsiID' => $this->provinsiID,
            'nama_KI' => $this->nama_KI,
            'is_KEK' => $this->is_KEK,
        ];
    }
}
