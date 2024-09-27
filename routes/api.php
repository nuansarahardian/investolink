<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProvinsiController;
use App\Http\Controllers\KomoditasController;
use App\Http\Controllers\SektorController;
use App\Http\Controllers\KawasanIndustriController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route untuk Provinsi
Route::apiResource('provinsi', ProvinsiController::class);

// Route untuk Komoditas
Route::apiResource('komoditas', KomoditasController::class);

// Route untuk Sektor
Route::apiResource('sektor', SektorController::class);

// Route untuk Kawasan Industri
Route::apiResource('kawasan_industri', KawasanIndustriController::class);