<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data_Nasional extends Model
{
    use HasFactory;

    protected $table = 'data_nasional';

    protected $fillable = [
        'nilai_pmdn_nasional',
        'nilai_pma_nasional',
        'nilai_realisasi_investasi_nasional',
        'nilai_pdrb_konstan_nasional',
        'nilai_pdrb_berlaku_nasional',
        'tahun'
    ];
}
