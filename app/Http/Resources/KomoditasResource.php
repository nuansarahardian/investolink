<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class KomoditasResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'komoditas_id' => $this->komoditas_id,
            'sektor_id' => $this->sektor_id,
            'nama_komoditas' => $this->nama_komoditas,
        ];
    }
}
