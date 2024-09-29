<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Komoditas extends Model
{
    use HasFactory;

    protected $table = 'komoditas';

    protected $primaryKey = 'komoditas_id';  // Primary key

    protected $fillable = [
        'sektor_id',
        'nama_komoditas',
    ];

    public function provinsi()
    {
        return $this->belongsToMany(Provinsi::class, 'provinsi_komoditas', 'komoditas_id', 'provinsi_id');
    }

    public function sektor()
    {
        return $this->belongsTo(Sektor::class, 'sektor_id');
    }
}
