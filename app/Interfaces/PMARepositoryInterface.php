<?php

namespace App\Interfaces;

interface PMARepositoryInterface
{
    public function index();
    public function show($id);
    public function showPMAbyProvinsi($id);
}
