<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provinsi_Komoditas extends Model
{
    use HasFactory;

    protected $table = 'provinsi_komoditas';

    protected $primaryKey = 'provinsi_komoditas_id';

    protected $fillable = [
        'provinsi_id',
        'komoditas_id',
        'jumlah_komoditas'
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsi_id');
    }

    public function komoditas()
    {
        return $this->belongsTo(Komoditas::class, 'komoditas_id');
    }
}
