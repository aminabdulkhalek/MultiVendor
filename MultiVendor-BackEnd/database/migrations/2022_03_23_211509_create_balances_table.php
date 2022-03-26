<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBalancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('balances', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('vendor_id')->unsigned()->index();
            $table->foreign('vendor_id')->references('id')->on('vendors')->onDelete('cascade');
            $table->float('total_sales')->unsigned()->default(0);
            $table->float('received_ammount')->unsigned()->default(0);
            $table->float('remaining_ammount')->unsigned()->default(0);
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
        Schema::dropIfExists('balances');
    }
}
