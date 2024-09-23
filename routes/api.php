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
Route::get('/provinsi/{id}', [ProvinsiController::class, 'show']);

// Route untuk Komoditas
Route::get('/komoditas', [KomoditasController::class, 'index']);
Route::get('/komoditas/{id}', [KomoditasController::class, 'show']);

// Route untuk Sektor
Route::get('/sektor', [SektorController::class, 'index']);
Route::get('/sektor/{id}', [SektorController::class, 'show']);
