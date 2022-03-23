<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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
Route::group(['middleware' => ['auth:api']], function () {

    Route::group(['prefix' => 'auth'], function () {
        Route::post('/logout', [AuthController::class, 'logout'])->name("logout");
        Route::post('/refresh', [AuthController::class, 'refresh'])->name("refresh");
    });

    Route::group(['prefix' => 'user'], function () {
        Route::get('/profile', [AuthController::class, 'userProfile'])->name("user-profile"); 
    });
    
    
    Route::group(['prefix' => 'admin'], function () {
    });
    
    
    Route::group(['prefix' => 'vendor'], function () {
    });
    
    
    Route::group(['prefix' => 'customer'], function () {
    });

    
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AuthController::class, 'login'])->name("auth-login");
    Route::post('/register', [AuthController::class, 'register'])->name("auth-register");
    Route::get('/notfound', [AuthController::class, 'notFound'])->name('not-found');
   
});