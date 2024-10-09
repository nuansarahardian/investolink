<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Di sini kamu bisa bind interface repository ke implementasinya
        $this->app->bind(
            \App\Repositories\SomeRepositoryInterface::class,
            \App\Repositories\SomeRepository::class
        );
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
