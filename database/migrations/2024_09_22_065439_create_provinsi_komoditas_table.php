<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('provinsi_komoditas', function (Blueprint $table) {
            $table->unsignedSmallInteger('provinsi_komoditas_id')->autoIncrement();
            $table->unsignedSmallInteger('provinsi_id');
            $table->unsignedSmallInteger('komoditas_id');
            $table->timestamps();

            $table->foreign('provinsi_id')->references('provinsi_id')->on('provinsi')->onDelete('cascade');
            $table->foreign('komoditas_id')->references('komoditas_id')->on('komoditas')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('provinsi_komoditas');
    }
};
