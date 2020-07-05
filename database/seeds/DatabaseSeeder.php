<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call([
            ProSeeder::class,
            PictureProSeeder::class,
            
        ]);
        // DB::table('pros')->insert([
            
            

        //     'shop_id'=>1,
        //     'typePro'=>'ثابت',
        //     'name'=> Str::random(10),
        //     // 'maker'=> Str::random(10),
        //     // 'brand'=> Str::random(10),
        //     // 'model'=> Str::random(10),
        //     'price'=> Str::random(10),
        //     'vahed'=> 'عدد',
        //     'num'=> 1,
        //     // 'vazn'=> Str::random(10),
        //     'vaznPost'=> 500,
        //     'dimension'=> 1,
        //     // 'pakat'=> Str::random(10),
        //     // 'dis'=> Str::random(10),
        //     // 'dateMake'=> Str::random(10),
        //     // 'dateExpiration'=> Str::random(10),
        //     // 'term'=> Str::random(10),
        //     // 'offerOrder'=> Str::random(10),
        //     // 'bazdid'=> Str::random(10),
        //     // 'numBuy'=> Str::random(10),
        //     'date_ad'=> 1575104396,
        //     'date_up'=> 1575104396,
        //     'seo'=> 'no',
        //     'show'=>1,
        // ]);
        
    }
}
