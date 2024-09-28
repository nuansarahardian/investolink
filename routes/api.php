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
Route::get('/provinsi/komoditas/{id}', [ProvinsiController::class, 'showProvinsibyKomoditas']);

// Route untuk Komoditas
Route::apiResource('komoditas', KomoditasController::class);
Route::get('/komoditas/provinsi/{id}', [KomoditasController::class, 'showKomoditasbyProvinsi']);
Route::get('/komoditas/sektor/{id}', [KomoditasController::class, 'showKomoditasbySektor']);
Route::get('/komoditas/provinsi/{provinsi_id}/sektor/{sektor_id}', [KomoditasController::class, 'showKomoditasbyProvinsiandSektor']);

// Route untuk Sektor
Route::apiResource('sektor', SektorController::class);

// Route untuk Kawasan Industri
Route::apiResource('kawasan_industri', KawasanIndustriController::class);
Route::get('/kawasan_industri/provinsi/{id}', [KawasanIndustriController::class, 'showKawasanIndustribyProvinsi']);