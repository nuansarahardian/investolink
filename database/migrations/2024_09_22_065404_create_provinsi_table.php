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
            $table->bigIncrements('provinsiID');
            $table->string('nama_provinsi', 25);
            $table->text('deskripsi')->nullable();
            $table->decimal('area', 10, 2);
            $table->string('website', 50)->nullable();
            $table->string('email', 50)->nullable();
            $table->string('phone', 20)->nullable();
            $table->text('special_economic_zone')->nullable();
            $table->bigInteger('population')->nullable();
            $table->decimal('gross_domestic_product', 15, 2)->nullable();
            $table->decimal('regional_income', 15, 2)->nullable();
            $table->text('related_links')->nullable();
            $table->decimal('regional_minimum_wage', 10, 2)->nullable();
            $table->integer('number_of_industrial_estates')->nullable();
            $table->decimal('realization_of_foreign_direct_investment', 15, 2)->nullable();
            $table->decimal('export_value', 15, 2)->nullable();
            $table->decimal('import_value', 15, 2)->nullable();
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
