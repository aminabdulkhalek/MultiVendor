<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('vendor_id')->unsigned()->index();
            $table->bigInteger('category_id')->unsigned()->index();
            $table->foreign('vendor_id')->references('id')->on('vendors')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->string('product_name', 255);
            $table->float('price')->unsigned();
            $table->bigInteger('stock')->unsigned()->defualt(0);
            $table->tinyInteger('status')->default(0);
            $table->bigInteger('sales')->default(0);
            $table->string('type', 255)->default('simple');
            $table->text('feature1')->nullable();
            $table->text('feature2')->nullable();
            $table->text('feature3')->nullable();
            $table->text('feature4')->nullable();
            $table->string('img1', 255)->nullable();
            $table->string('img2', 255)->nullable();
            $table->string('img3', 255)->nullable();
            $table->string('img4', 255)->nullable();
            $table->text('desc1')->nullable();
            $table->text('desc2')->nullable();




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
        Schema::dropIfExists('products');
    }
}
