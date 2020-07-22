<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->increments('id');
            $table->json('id_pro')->nullable();
            $table->string('name' , 100);
            $table->string('squad',70)->nullable();
            $table->string('vahed',40);
            $table->string('num',3);
            $table->text('dis')->nullable();
            $table->string('mobail',12);
            $table->string('ostan',30);
            $table->string('city',30);
            $table->integer('date_ad');
            $table->integer('date_up');
            $table->boolean('stage');
            $table->boolean('show');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
