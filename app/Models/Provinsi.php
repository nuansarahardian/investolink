<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provinsi extends Model
{
    use HasFactory;

    protected $table = 'provinsi'; 

    public $incrementing = false; // provinsiID bukan auto increment

    protected $primaryKey = 'provinsiID';  // Primary key

    protected $fillable = [
        'nama_provinsi',
        'deskripsi',
        'area',
        'website',
        'email',
        'phone',
        'special_economic_zone',
        'population',
        'gross_domestic_product',
        'regional_income',
        'related_links',
        'regional_minimum_wage',
        'number_of_industrial_estates',
        'realization_of_foreign_direct_investment',
        'export_value',
        'import_value',
    ];

    public function komoditas()
    {
        return $this->belongsToMany(Komoditas::class, 'provinsi_komoditas', 'provinsiID', 'komoditasID');
    }

    public function kawasan_industri()
    {
        return $this->hasMany(kawasan_industri::class, 'provinsiID');
    }
}
