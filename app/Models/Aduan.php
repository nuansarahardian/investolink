<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Aduan extends Model
{
    use HasFactory;

    // Nama tabel di database
    protected $table = 'aduan';

    // Kolom yang bisa diisi (mass assignable)
    protected $fillable = [
        'nama_lengkap',
        'email',
        'no_handphone',
        'subyek',
        'isi_aduan',
        'is_solved', // Tambahkan ini
        'created_at',
        'updated_at'
    ];

    // Jika ada timestamp (created_at, updated_at)
    public $timestamps = true;

    // Jika ingin menggunakan format tanggal lain atau tipe data lain
    protected $dates = [
        'created_at',
        'updated_at'
    ];
}
