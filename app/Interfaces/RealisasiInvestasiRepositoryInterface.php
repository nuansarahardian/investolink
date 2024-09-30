<?php

namespace App\Interfaces;

interface RealisasiInvestasiRepositoryInterface
{
    public function index();
    public function show($id);
    public function showRealisasiInvestasibyProvinsi($id);
}
