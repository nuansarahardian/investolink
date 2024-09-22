<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provinsi_Komoditas extends Model
{
    use HasFactory;

    protected $table = 'provinsi_komoditas';

    public $incrementing = false; // provinsiID dan komoditasID bukan auto increment

    protected $fillable = [
        'provinsiID',
        'komoditasID',
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsiID');
    }

    public function komoditas()
    {
        return $this->belongsTo(Komoditas::class, 'komoditasID');
    }
}
