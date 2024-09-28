<?php

namespace App\Interfaces;

interface KomoditasRepositoryInterface
{
    public function index();
    public function show($id);
    public function showKomoditasbyProvinsi($id);
    public function showKomoditasbySektor($id);
    public function showKomoditasbyProvinsiandSektor($provinsi_id, $sektor_id);
}
