<?php

namespace App\Interfaces;

interface PDRBRepositoryInterface
{
    public function index();
    public function show($id);
    public function showPDRBbyProvinsi($id);
}
