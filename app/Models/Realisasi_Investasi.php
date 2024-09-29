<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Realisasi_Investasi extends Model
{
    use HasFactory;

    protected $table = 'realisasi_investasi';

    protected $primaryKey = 'realisasiinvestasiID';

    protected $fillable = [
        'provinsiID',
        'tahun',
        'nilai_realisasi_investasi',
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsiID');
    }
}
