<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('product_id')->unsigned()->index();;
            $table->bigInteger('customer_id')->unsigned()->index();;
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
            $table->tinyInteger('stars')->default(0);
            $table->tinyInteger('review_status')->default(1);
            $table->text('review_comment');
            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');
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
        Schema::dropIfExists('reviews');
    }
}
