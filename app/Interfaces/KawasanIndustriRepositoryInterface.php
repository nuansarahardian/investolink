<?php

namespace App\Interfaces;

interface KawasanIndustriRepositoryInterface
{
    public function index();
    public function show($id);
    public function showKawasanIndustribyProvinsi($id);
    public function showKawasanEkonomiKhususbyProvinsi($id);
    
}
