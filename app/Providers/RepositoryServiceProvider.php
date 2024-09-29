<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\ProvinsiRepositoryInterface;
use App\Repositories\ProvinsiRepository;
use App\Interfaces\KomoditasRepositoryInterface;
use App\Repositories\KomoditasRepository;
use App\Interfaces\SektorRepositoryInterface;
use App\Repositories\SektorRepository;
use App\Interfaces\KawasanIndustriRepositoryInterface;
use App\Repositories\KawasanIndustriRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(ProvinsiRepositoryInterface::class, ProvinsiRepository::class);
        $this->app->bind(KomoditasRepositoryInterface::class, KomoditasRepository::class);
        $this->app->bind(SektorRepositoryInterface::class, SektorRepository::class);
        $this->app->bind(KawasanIndustriRepositoryInterface::class, KawasanIndustriRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
