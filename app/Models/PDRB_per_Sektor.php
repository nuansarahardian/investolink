<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PDRB_per_Sektor extends Model
{
    use HasFactory;

    protected $fillable = [
        'provinsi_id',
        'sektor_id',
        'nilai_pdrb_per_sektor'
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
