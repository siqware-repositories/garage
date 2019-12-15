<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncomeDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('income_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('income_id')->unsigned();
            $table->string('description');
            $table->string('type');
            $table->float('balance');
            $table->foreign('income_id')->references('id')->on('incomes')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('income_details');
    }
}
