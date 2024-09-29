<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PMA extends Model
{
    use HasFactory;

    protected $table = 'pma';

    protected $primaryKey = 'PMA_id';  // Primary key

    protected $fillable = [
        'provinsi_id',
        'tahun',
        'nilai_pma',
    ];

    public function provinsi()
    {
        return $this->belongsTo(Provinsi::class, 'provinsi_id');
    }
}
