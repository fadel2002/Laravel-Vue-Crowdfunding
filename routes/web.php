<?php

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

// Route::get('/test', function (){
//     return view('send_mail_user_registered');
// });

// Route::get('/', function () {
//     return view('welcome');
// });

// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');

// Route::get('/route-1', function(){
//     return 'Masuk ke route 1 email sudah diverifikasi';
// })->middleware(['email.verified']);

// Route::get('/route-2', function(){
//     return 'Masuk ke route 2, anda admin';
// })->middleware(['admin.verified']);

// Route::get('/', function(){
//     return view('app');
// });

Route::view('/{any?}', 'app')->where('any', '.*');
