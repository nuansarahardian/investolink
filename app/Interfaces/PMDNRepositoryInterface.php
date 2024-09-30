<?php

namespace App\Interfaces;

interface PMDNRepositoryInterface
{
    public function index();
    public function show($id);
    public function showPMDNbyProvinsi($id);
}
