<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PDRB extends Model
{
    use HasFactory;

    protected $table = 'pdrb';

    protected $primaryKey = 'PDRBID';

    protected $fillable = [
        'provinsiID',
        'tahun',
        'nilai_pdrb_konstan',
        'nilai_pdrb_berlaku',
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsiID');
    }
}
