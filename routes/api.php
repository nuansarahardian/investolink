<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProvinsiController;
use App\Http\Controllers\KomoditasController;
use App\Http\Controllers\SektorController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route untuk Provinsi
Route::get('/provinsi', [ProvinsiController::class, 'index']);
// Route untuk Komoditas berdasarkan ID Provinsi
Route::get('/provinsi/{id}/komoditas', [ProvinsiController::class, 'showKomoditasbyProvinsi']);	
// Route untuk Kawasan_Industri berdasarkan ID Provinsi
Route::get('/provinsi/{id}/kawasan_industri', [ProvinsiController::class, 'showKawasanIndustribyProvinsi']);

// Route untuk Komoditas
// Route::get('/komoditas', [KomoditasController::class, 'index']);
// Route untuk Provinsi berdasarkan ID Komoditas
// Route::get('/komoditas/{id}/provinsi', [KomoditasController::class, 'showKomoditasbyProvinsi']);

// Route untuk Sektor
Route::get('/sektor', [SektorController::class, 'index']);
// Route untuk Provinsi berdasarkan ID Sektor
Route::get('/sektor/{id}/provinsi', [SektorController::class, 'showSektorbyProvinsi']);
// Route untuk Komoditas berdasarkan ID Sektor
Route::get('/sektor/{id}/komoditas', [SektorController::class, 'showSektorbyKomoditas']);


// Route::get('/provinsi/{id}', [ProvinsiController::class, 'show']);

// Route::get('/komoditas/{id}', [KomoditasController::class, 'show']);

// Route::get('/sektor/{id}', [SektorController::class, 'show']);
