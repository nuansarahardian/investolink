<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sektor extends Model
{
    use HasFactory;

    protected $table = 'sektor';

    protected $primaryKey = 'sektor_id';  // Primary key

    protected $fillable = [
        'nama_sektor',
    ];

    public function komoditas()
    {
        return $this->hasMany(Komoditas::class, 'sektor_id');
    }

    public function peluang_investasi()
    {
        return $this->hasMany(Peluang_Investasi::class, 'sektor_id');
    }

    public function pdrb_per_sektor()
    {
        return $this->hasMany(PDRB_Per_Sektor::class, 'provinsi_id');
    }
}
