<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sektor extends Model
{
    use HasFactory;

    protected $table = 'sektor';

    protected $primaryKey = 'sektor_id';  // Primary key

    protected $fillable = [
        'nama_sektor',
    ];

    public function komoditas()
    {
        return $this->hasMany(Komoditas::class, 'sektor_id');
    }
    public function pdrbPerSektor()
    {
        return $this->hasMany(PDRBPerSektor::class, 'sektor_id');
    }
    // public function pdrb_per_sektor()
    // {
    //     return $this->hasMany(PDRB_per_Sektor::class, 'sektorID');
    // }
}
