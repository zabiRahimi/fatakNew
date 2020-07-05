<?php

use Illuminate\Database\Seeder;

class ProSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Pro::class, 30)->create();
    }
}
