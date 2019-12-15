<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePayRollDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pay_roll_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('pay_roll_id')->unsigned();
            $table->bigInteger('employee_id');
            $table->date('date');
            $table->float('salary');
            $table->foreign('pay_roll_id')->references('id')->on('pay_rolls')->onDelete('cascade');
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
        Schema::dropIfExists('pay_roll_details');
    }
}
