<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/refreshCaptcha', 'CaptchaController@refreshCaptcha');//ok
Route::resource('/pros','ProController');


Route::get('{any}', function () {
    return view('home'); // or wherever your React app is bootstrapped.
})->where('any', '.*');

Route::post('/shop/register','Shop\Auth\RegisterController@register');
Route::get('/shop/loguot','Shop\Auth\LoginController@loguot');

Route::resource('/order','OrderController')->middleware('shop');
// Route::resource('/shop','ShopController');
Route::resource('/socialNetwork','SocialNetworkController');


// Route::get('/{path?}', function($path = null){return View::make('home');})->where('path', '.*'); 
