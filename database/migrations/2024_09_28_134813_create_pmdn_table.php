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
        Schema::create('pmdn', function (Blueprint $table) {
            $table->unsignedSmallInteger('PMDN_id')->autoIncrement();
            $table->unsignedSmallInteger('provinsi_id');
            $table->year('tahun');
            $table->decimal('nilai_pmdn', 15, 2)->nullable();
            $table->timestamps();

            $table->foreign('provinsi_id')->references('provinsi_id')->on('provinsi')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pmdn');
    }
};
