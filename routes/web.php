<?php
use App\Http\Controllers\ProfileController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


use App\Http\Controllers\GeoMapController;
use App\Http\Controllers\ProfilInvestasiController;
use App\Http\Controllers\PetaInvestasiController;


// Route::get('/geomap', [GeoMapController::class, 'index']);



// Route::get('/provinsi-kawasan', [TabelProvinsiController::class, 'index']);
// Route::get('/provinsi-kawasan/{id}', [TabelProvinsiController::class, 'showKawasanIndustribyProvinsi']);
// Route::get('/provinsi-kawasan-kek/{id}', [TabelProvinsiController::class, 'showKawasanEkonomiKhususbyProvinsi']);



Route::get('/', function () {
    return Inertia::render('Homepage');
});
Route::get('/profildaerah', function () {
    return Inertia::render('ProfilDaerah');
});


Route::get('/invesment-map', [PetaInvestasiController::class, 'index']);

// Route::get('/provinsi', [ProvinsiController::class, 'getProvinsi']);
// Route::get('/pdrb', [ProvinsiController::class, 'getPdrb']);
// Route::get('/provinsi-pdrb', [ProvinsiController::class, 'getProvinsiWithPdrb']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/tabel-provinsi', [TabelProvinsiController::class, 'index'])->name('tabel.provinsi');

require __DIR__.'/auth.php';
