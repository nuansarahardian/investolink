<?php

namespace App\Interfaces;

interface ProvinsiRepositoryInterface
{
    public function index();
    public function show($id);
    public function showProvinsibyKomoditas($id);
}
