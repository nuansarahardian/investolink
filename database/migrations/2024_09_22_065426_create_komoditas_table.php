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
        Schema::create('komoditas', function (Blueprint $table) {
            $table->unsignedSmallInteger('komoditas_id')->autoIncrement();
            $table->unsignedSmallInteger('sektor_id');
            $table->string('nama_komoditas', 25);
            $table->timestamps();

            $table->foreign('sektor_id')->references('sektor_id')->on('sektor')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('komoditas');
    }
};
