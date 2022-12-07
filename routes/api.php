<?php

use Illuminate\Http\Request;
use App\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'prefix' => 'auth',
    'namespace' => 'Auth',
    'middleware' => 'api',   
], function (){
    Route::post('register', 'RegisterController');
    Route::post('regenerate-otp-code', 'RegenerateOtpCodeController');
    Route::post('email-verification', 'EmailVerificationController');
    Route::post('update-password', 'UpdatePasswordController');
    Route::post('login', 'LoginController');
    Route::post('logout', 'LogoutController')->middleware('auth:api');
    Route::post('check-token', 'CheckTokenController')->middleware('auth:api');
    Route::get('/social/{provider}', 'SocialiteController@redirectToProvider');
    Route::get('/social/{provider}/callback', 'SocialiteController@handleProviderCallback');
});

Route::group([
    'prefix' => 'profile',
    'namespace' => 'Profile',
    'middleware' => ['auth:api', 'email.verified'],
], function() {
    // Route::get('/test', function(){
    //     return response()->json([
    //        'data' => auth()->user()->isAdmin(),
    //     ]);
    // });
    Route::get('show', 'GetProfileController');
    Route::post('update', 'UpdateProfileController');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'campaign',
], function(){
    Route::get('random/{count}', 'CampaignController@random');
    Route::post('store', 'CampaignController@store');
    Route::get('/', 'CampaignController@index');
    Route::get('/history', 'CampaignController@history')->middleware('auth:api');
    Route::get('/history/{id}', 'CampaignController@detailHistory');
    Route::get('/{id}', 'CampaignController@detail');
    Route::get('/search/{keyword}', 'CampaignController@search');
    Route::post('/update-fund/{id}', 'CampaignController@updateFund')->middleware('auth:api');
});



Route::group([
    'middleware' => 'api',
    'prefix' => 'blog',
], function(){
    Route::get('random/{count}', 'BlogController@random');
    Route::post('store', 'BlogController@store');
    Route::get('/', 'BlogController@index');
    Route::get('/{id}', 'BlogController@detail');
});

Route::post('payment/store', 'PaymentController@store')->middleware('api');
Route::post('/generate', 'PaymentController@generate')->middleware('api');
// Route::get('test', 'TestController');

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
