<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->increments('id');
            $table->string('shop',30)->unique()->nullable()->comment('نام فروشگاه');
            $table->string('name',30)->comment('نام فروشنده');
            $table->string('lastName',30)->comment('نام خانوادگی فروشنده');
            $table->string('pass',60);
            $table->string('mobile',12)->unique();
            $table->string('tel',12)->nullable();
            $table->string('email',100)->unique()->nullable();
            $table->string('img',60)->nullable();
            $table->string('nationalCode',11)->unique()->nullable()->comment('کد ملی');
            $table->string('stateCode',2)->nullable();
            $table->string('cityCode',3)->nullable();
            $table->string('state',32)->nullable();
            $table->string('city' , 32)->nullable();
            $table->text('address')->nullable();
            $table->string('postalCode' , 11)->nullable()->comment('کد پستی');
            $table->string('accountNumber' , 20)->nullable()->comment('شماره حساب');
            $table->string('cardNumber' , 20)->nullable()->comment('شماره کارت');
            $table->string('shabaNumber' , 100)->nullable()->comment('شماره شبا');
            $table->string('accountOwner' , 32)->nullable()->comment('صاحب حساب');
            $table->string('bank' , 32)->nullable();
            $table->integer('date_ad');
            $table->integer('date_up');
            $table->string('rank' , 12)->nullable();
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
        Schema::dropIfExists('shops');
    }
}
