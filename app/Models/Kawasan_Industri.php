<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kawasan_Industri extends Model
{
    use HasFactory;

    protected $table = 'kawasan_industri';

    protected $primaryKey = 'kawasan_industri_id';  // Primary key

    protected $fillable = [
        'provinsi_id',
        'nama_kawasan_industri',
        'kabupaten_atau_kota',
        'luas_lahan',
        'target_investasi',
        'industri',
        'is_kawasan_ekonomi_khusus',
        'latitude',
        'longitude',
        'link_terkait'
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsi_id');
    }
}
