<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provinsi extends Model
{
    use HasFactory;

    protected $table = 'provinsi'; 

    protected $primaryKey = 'provinsi_id';  // Primary key

    protected $fillable = [
        'nama_provinsi',
        'gambar_ikonik',
        'luas_area',
        'website',
        'email',
        'nomor_handphone',
        'populasi',
        'link_terkait',
        'upah_minimum_provinsi',
        'nilai_ekspor',
        'nilai_impor',
    ];

    public function komoditas()
    {
        return $this->belongsToMany(Komoditas::class, 'provinsi_komoditas', 'provinsi_id', 'komoditas_id');
    }

    public function kawasan_industri()
    {
        return $this->hasMany(Kawasan_Industri::class, 'provinsi_id');
    }

    public function pma()
    {
        return $this->hasMany(PMA::class, 'provinsi_id');
    }

    public function pmdn()
    {
        return $this->hasMany(PMDN::class, 'provinsi_id');
    }

    public function pdrb()
    {
        return $this->hasMany(PDRB::class, 'provinsi_id');
    }

    public function realisasi_investasi()
    {
        return $this->hasMany(Realisasi_Investasi::class, 'provinsi_id');
    }
    public function pdrbPerSektor()
    {
        return $this->hasMany(PDRBPerSektor::class, 'provinsi_id');
    }
}
