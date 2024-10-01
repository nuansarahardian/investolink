<?php
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\petaInvestasi\ProvinsiController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Homepage');
});

Route::get('/invesment-map', function () {
    return Inertia::render('InvesmentMap');
});

Route::get('/provinsi', [ProvinsiController::class, 'getProvinsi']);
Route::get('/pdrb', [ProvinsiController::class, 'getPdrb']);
Route::get('/provinsi-pdrb', [ProvinsiController::class, 'getProvinsiWithPdrb']);

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
