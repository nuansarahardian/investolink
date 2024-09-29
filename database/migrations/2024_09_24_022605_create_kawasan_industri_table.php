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
        Schema::create('kawasan_industri', function (Blueprint $table) {
            $table->bigIncrements('kawasan_industri_id');
            $table->unsignedSmallInteger('provinsi_id');
            $table->string('nama_kawasan_industri', 50);
            $table->boolean('is_kawasan_ekonomi_khusus')->default(false);
            $table->timestamps();

            $table->foreign('provinsi_id')->references('provinsi_id')->on('provinsi')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kawasan_industri');
    }
};
