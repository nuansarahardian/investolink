<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PMDN extends Model
{
    use HasFactory;

    protected $table = 'pmdn';

    protected $primaryKey = 'PMDNID';

    protected $fillable = [
        'provinsiID',
        'tahun',
        'nilai_pmdn',
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsiID');
    }
}
