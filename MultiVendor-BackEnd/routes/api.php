<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\AdminController;
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
        Route::get('/profile', [UserController::class, 'userProfile'])->name("user-profile");
    });


    Route::group(['middleware' => ['role.admin']], function () {
        Route::group(['prefix' => 'admin'], function () {
            Route::get('/profile', [UserController::class, 'adminProfile'])->name("admin-profile");
            Route::get('/customers', [Admincontroller::class, 'getCustomers'])->name("customers");
            Route::get('/pending-orders', [Admincontroller::class, 'getPendingOrders'])->name("pendning-orders");
            Route::get('/approved-orders', [Admincontroller::class, 'getApprovedOrders'])->name("Approved-orders");
            Route::get('/disapproved-orders', [Admincontroller::class, 'getDisapprovedOrders'])->name("disapproved-orders");
            Route::get('/nb-orders', [Admincontroller::class, 'getTotalNBOrders'])->name("nb-orders");
            Route::get('/nb-pending-orders', [Admincontroller::class, 'numberOfPendingOrders'])->name("nb-pending-orders");
            Route::get('/nb-approved-orders', [Admincontroller::class, 'numberOfApprovedOrders'])->name("nb-approved-orders");
            Route::get('/nb-disapproved-orders', [Admincontroller::class, 'numberOfDeniedOrders'])->name("nb-denied-orders");
            Route::get('/nb-products', [Admincontroller::class, 'numberOfProducts'])->name("nb-products");
            Route::get('/top-selling', [Admincontroller::class, 'topSelling'])->name("top-selling");
            Route::get('/nb-customers', [Admincontroller::class, 'nbCustomers'])->name("nb-customers");
            Route::get('/this-month-customers', [Admincontroller::class, 'thisMonthCustomers'])->name("this-month-customers");
            Route::get('/last-month-customers', [Admincontroller::class, 'lastMonthCustomers'])->name("last-month-customers");
            Route::post('/new-featured', [Admincontroller::class, 'newFeatured'])->name("new-featured");
            Route::get('/total-sales', [Admincontroller::class, 'totalSales'])->name("total_sales");

        });
    });


    Route::group(['middleware' => ['role.vednor']], function () {
        Route::group(['prefix' => 'vendor'], function () {
            Route::get('/profile', [UserController::class, 'vendorProfile'])->name("vendor-profile");

        });
    });


    Route::group(['middleware' => ['role.customer']], function () {
        Route::group(['prefix' => 'customer'], function () {
            Route::get('/profile', [UserController::class, 'customerProfile'])->name("customer-profile");

        });
    });


});

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AuthController::class, 'login'])->name("auth-login");
    Route::post('/register', [AuthController::class, 'register'])->name("auth-register");
    Route::get('/notfound', [AuthController::class, 'notFound'])->name('not-found');

});
