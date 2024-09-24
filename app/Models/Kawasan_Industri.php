<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kawasan_Industri extends Model
{
    use HasFactory;

    protected $table = 'kawasan_industri';

    protected $primaryKey = 'KIID';  // Primary key

    protected $fillable = [
        'provinsiID',
        'nama_KI',
        'is_KEK',
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsiID');
    }
}
