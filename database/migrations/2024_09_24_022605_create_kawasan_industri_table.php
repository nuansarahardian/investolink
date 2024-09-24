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
            $table->bigIncrements('KIID');
            $table->unsignedBigInteger('provinsiID');
            $table->string('nama_KI', 50);
            $table->boolean('is_KEK')->default(false);
            $table->timestamps();

            $table->foreign('provinsiID')->references('provinsiID')->on('provinsi')->onDelete('cascade');
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
