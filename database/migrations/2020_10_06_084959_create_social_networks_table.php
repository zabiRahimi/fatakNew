<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSocialNetworksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('social_networks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name',30)->comment('نام مدیر');
            $table->string('lastName',30)->comment('نام خانوادگی مدیر');
            $table->string('mobile',13)->index()->unique();
            $table->string('email')->unique()->nullable();
            $table->string('pass',60);
            $table->string('nationalCode',11)->unique()->nullable()->comment('کد ملی');
            $table->string('state',30)->nullable();
            $table->string('city',30)->nullable();
            $table->text('address')->nullable();
            $table->string('postalCode' , 11)->nullable()->comment('کد پستی');
            $table->string('accountNumber',20)->nullable()->comment('شماره حساب');;
            $table->string('cardNumber' , 20)->nullable()->comment('شماره کارت');
            $table->string('shabaNumber' , 100)->nullable()->comment('شماره شبا');
            $table->string('accountOwner' , 32)->nullable()->comment('صاحب حساب');
            $table->string('bank',50)->nullable();
            $table->integer('income')->nullable();
            $table->string('date_up_income',14)->nullable();
            $table->string('date_ad',14);
            $table->string('date_up',14);
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
        Schema::dropIfExists('social_networks');
    }
}
