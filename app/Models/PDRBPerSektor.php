<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PDRBPerSektor extends Model
{
    
    use HasFactory;

    protected $table = 'pdrb_per_sektor';
    protected $primaryKey = 'pdrb_per_sektor_id';
    public $timestamps = true;

    protected $fillable = [
        'provinsi_id',
        'sektor_id',
        'nilai_pdrb_per_sektor',
    ];

    /**
     * Relasi ke tabel Provinsi.
     */
    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsi_id', 'provinsi_id');
    }

    /**
     * Relasi ke tabel Sektor.
     */
    public function sektor()
    {
        return $this->belongsTo(Sektor::class, 'sektor_id', 'sektor_id');
    }
}

