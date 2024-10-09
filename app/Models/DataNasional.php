<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataNasional extends Model
{
    // Nama tabel
    protected $table = 'data_nasional';

    // Primary key (jika berbeda dengan id)
    protected $primaryKey = null;

    // Menonaktifkan auto-increment (karena tidak ada primary key)
    public $incrementing = false;

    // Tipe primary key (jika tidak menggunakan integer)
    protected $keyType = 'string';

    // Field yang bisa diisi (mass assignable)
    protected $fillable = [
        'nilai_pmdn_nasional',
        'nilai_pma_nasional',
        'nilai_realisasi_investasi_nasional',
        'nilai_pdrb_konstan_nasional',
        'nilai_pdrb_berlaku_nasional',
        'tahun',
    ];

    // Menonaktifkan timestamps (created_at, updated_at)
    public $timestamps = false;
}