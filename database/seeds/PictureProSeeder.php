<?php

use Illuminate\Database\Seeder;

class PictureProSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\PicturePro::class, 30)->create();
    }
}
