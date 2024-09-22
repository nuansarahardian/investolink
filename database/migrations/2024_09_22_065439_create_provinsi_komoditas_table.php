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
            $table->unsignedBigInteger('provinsiID');
            $table->unsignedBigInteger('komoditasID');
            $table->timestamps();

            $table->foreign('provinsiID')->references('provinsiID')->on('provinsi')->onDelete('cascade');
            $table->foreign('komoditasID')->references('komoditasID')->on('komoditas')->onDelete('cascade');
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
