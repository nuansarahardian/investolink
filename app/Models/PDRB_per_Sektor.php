<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PDRB_per_Sektor extends Model
{
    use HasFactory;

    protected $table = 'pdrb_per_sektor';

    protected $primaryKey = 'PDRBpersektorID';

    protected $fillable = [
        'provinsiID',
        'sektorID',
        'tahun',
        'nilai_pdrb',
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsiID');
    }

    public function sektor()
    {
        return $this->belongsTo(Sektor::class, 'sektorID');
    }
}
