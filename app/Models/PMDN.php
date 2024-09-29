<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PMDN extends Model
{
    use HasFactory;

    protected $table = 'pmdn';

    protected $primaryKey = 'PMDN_id';  // Primary key

    protected $fillable = [
        'provinsi_id',
        'tahun',
        'nilai_pmdn',
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsi_id');
    }
}
