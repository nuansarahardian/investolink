<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sektor extends Model
{
    use HasFactory;

    protected $table = 'sektor';

    protected $primaryKey = 'sektorID';

    protected $fillable = [
        'nama_sektor',
    ];

    public function komoditas()
    {
        return $this->hasMany(Komoditas::class, 'sektorID');
    }
}
