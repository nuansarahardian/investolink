<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PDRB extends Model
{
    use HasFactory;

    protected $table = 'pdrb';

    protected $primaryKey = 'PDRB_id';  // Primary key

    protected $fillable = [
        'provinsi_id',
        'tahun',
        'nilai_pdrb_konstan',
        'nilai_pdrb_berlaku',
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsi_id');
    }
}
