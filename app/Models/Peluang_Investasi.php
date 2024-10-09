<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peluang_Investasi extends Model
{
    use HasFactory;

    protected $table = 'peluang_investasi';

    protected $primaryKey = 'peluang_investasi_id';  // Primary key

    protected $fillable = [
        'provinsi_id',
        'sektor_id',
        'judul_projek',
        'daerah',
        'link_menuju_page',
        'link_gambar'
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsi_id');
    }

    public function sektor()
    {
        return $this->belongsTo(Sektor::class, 'sektor_id');
    }
}
