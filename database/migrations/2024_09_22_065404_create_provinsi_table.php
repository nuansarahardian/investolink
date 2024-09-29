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
        Schema::create('provinsi', function (Blueprint $table) {
            $table->unsignedSmallInteger('provinsi_id')->autoIncrement();
            $table->string('nama_provinsi', 25);
            $table->decimal('luas_area', 10, 2);
            $table->string('website', 50)->nullable();
            $table->string('email', 50)->nullable();
            $table->string('nomor_handphone', 20)->nullable();
            $table->bigInteger('populasi')->nullable();
            $table->string('link_terkait', 50)->nullable();
            $table->decimal('upah_minimum_provinsi', 10, 2)->nullable();
            $table->decimal('nilai_ekspor', 15, 2)->nullable();
            $table->decimal('nilai_impor', 15, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('provinsi');
    }
};
