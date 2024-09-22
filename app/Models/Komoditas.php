<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Komoditas extends Model
{
    use HasFactory;

    protected $table = 'komoditas';

    protected $primaryKey = 'komoditasID';

    protected $fillable = [
        'sektorID',
        'nama_komoditas',
    ];

    public function provinsi()
    {
        return $this->belongsToMany(Provinsi::class, 'provinsi_komoditas', 'komoditasID', 'provinsiID');
    }

    public function sektor()
    {
        return $this->belongsTo(Sektor::class, 'sektorID');
    }
}
