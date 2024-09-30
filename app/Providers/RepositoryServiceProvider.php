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
use App\Interfaces\PMARepositoryInterface;
use App\Repositories\PMARepository;
use App\Interfaces\PMDNRepositoryInterface;
use App\Repositories\PMDNRepository;
use App\Interfaces\PDRBRepositoryInterface;
use App\Repositories\PDRBRepository;
use App\Interfaces\RealisasiInvestasiRepositoryInterface;
use App\Repositories\RealisasiInvestasiRepository;

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
        $this->app->bind(PMARepositoryInterface::class, PMARepository::class);
        $this->app->bind(PMDNRepositoryInterface::class, PMDNRepository::class);
        $this->app->bind(PDRBRepositoryInterface::class, PDRBRepository::class);
        $this->app->bind(RealisasiInvestasiRepositoryInterface::class, RealisasiInvestasiRepository::class);
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
