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
        Schema::create('pdrb_per_sektor', function (Blueprint $table) {
            $table->bigIncrements('PDRBpersektorID');
            $table->unsignedBigInteger('provinsiID');
            $table->unsignedBigInteger('sektorID');
            $table->year('tahun');
            $table->decimal('nilai_pdrb', 15, 2)->nullable();
            $table->timestamps();

            $table->foreign('provinsiID')->references('provinsiID')->on('provinsi')->onDelete('cascade');
            $table->foreign('sektorID')->references('sektorID')->on('sektor')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pdrb_per_sektor');
    }
};
