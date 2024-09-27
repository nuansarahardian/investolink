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
            'provinsiID' => $this->provinsiID,
            'deskripsi' => $this->deskripsi,
            'area' => $this->area,
            'website' => $this->website,
            'email' => $this->email,
            'phone' => $this->phone,
            'special_economic_zone' => $this->special_economic_zone,
            'population' => $this->population,
            'gross_domestic_product' => $this->gross_domestic_product,
            'regional_income' => $this->regional_income,
            'related_links' => $this->related_links,
            'regional_minimum_wage' => $this->regional_minimum_wage,
            'number_of_industrial_estates' => $this->number_of_industrial_estates,
            'realization_of_foreign_direct_investment' => $this->realization_of_foreign_direct_investment,
            'export_value' => $this->export_value,
            'import_value' => $this->import_value,
            'nama_provinsi' => $this->nama_provinsi,
        ];
    }
}
