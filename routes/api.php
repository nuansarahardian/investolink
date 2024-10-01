<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProvinsiController;
use App\Http\Controllers\KomoditasController;
use App\Http\Controllers\SektorController;
use App\Http\Controllers\KawasanIndustriController;
use App\Http\Controllers\PDRBController;
use App\Http\Controllers\PMDNController;
use App\Http\Controllers\PMAController;
use App\Http\Controllers\RealisasiInvestasiController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route untuk Provinsi
Route::apiResource('provinsi', ProvinsiController::class)->names([
    'index' => 'provinsi.index',
    'store' => 'provinsi.store',
    'show' => 'provinsi.show',
    'update' => 'provinsi.update',
    'destroy' => 'provinsi.destroy',
]);
Route::get('/provinsi/komoditas/{id}', [ProvinsiController::class, 'showProvinsibyKomoditas']);

// Route untuk Komoditas
Route::apiResource('komoditas', KomoditasController::class);
Route::get('/komoditas/provinsi/{id}', [KomoditasController::class, 'showKomoditasbyProvinsi']);
Route::get('/komoditas/sektor/{id}', [KomoditasController::class, 'showKomoditasbySektor']);
Route::get('/komoditas/provinsi/{provinsi_id}/sektor/{sektor_id}', [KomoditasController::class, 'showKomoditasbyProvinsiandSektor']);

// Route untuk Sektor
Route::apiResource('sektor', SektorController::class);

// Route untuk Kawasan Industri dan Kawasan Ekonomi Khusus
Route::apiResource('kawasan_industri', KawasanIndustriController::class);
Route::get('/kawasan_industri/provinsi/{id}', [KawasanIndustriController::class, 'showKawasanIndustribyProvinsi']);
Route::get('/kawasan_industri/kek/provinsi/{id}', [KawasanIndustriController::class, 'showKawasanEkonomiKhususbyProvinsi']);

// Route untuk PDRB
Route::apiResource('pdrb', PDRBController::class);
Route::get('/pdrb/provinsi/{id}', [PDRBController::class, 'showPDRBbyProvinsi']);

// Route untuk PMDN
Route::apiResource('pmdn', PMDNController::class);
Route::get('/pmdn/provinsi/{id}', [PMDNController::class, 'showPMDNbyProvinsi']);

// Route untuk PMA
Route::apiResource('pma', PMAController::class);
Route::get('/pma/provinsi/{id}', [PMAController::class, 'showPMAbyProvinsi']);

// Route untuk Realisasi Investasi
Route::apiResource('realisasi_investasi', RealisasiInvestasiController::class);
Route::get('/realisasi_investasi/provinsi/{id}', [RealisasiInvestasiController::class, 'showRealisasiInvestasibyProvinsi']);