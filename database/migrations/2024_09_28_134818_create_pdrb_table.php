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
        Schema::create('pdrb', function (Blueprint $table) {
            $table->bigIncrements('PDRBID');
            $table->unsignedBigInteger('provinsiID');
            $table->year('tahun');
            $table->decimal('nilai_pdrb_konstan', 15, 2)->nullable();
            $table->decimal('nilai_pdrb_berlaku', 15, 2)->nullable();
            $table->timestamps();

            $table->foreign('provinsiID')->references('provinsiID')->on('provinsi')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pdrb');
    }
};
