<?php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CustomerController;
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
        Route::post('/name', [UserController::class, 'getName'])->name("Name");
        Route::post('/product', [UserController::class, 'getProduct'])->name("product");
        Route::get('/categories', [UserController::class, 'getCategories'])->name("categories");

    });


    Route::group(['middleware' => ['role.admin']], function () {
        Route::group(['prefix' => 'admin'], function () {
            Route::get('/profile', [UserController::class, 'adminProfile'])->name("admin-profile");
            Route::get('/customers', [AdminController::class, 'getCustomers'])->name("customers");
            Route::get('/pending-orders', [AdminController::class, 'getPendingOrders'])->name("pendning-orders");
            Route::get('/approved-orders', [AdminController::class, 'getApprovedOrders'])->name("Approved-orders");
            Route::get('/disapproved-orders', [AdminController::class, 'getDisapprovedOrders'])->name("disapproved-orders");
            Route::get('/nb-orders', [AdminController::class, 'getTotalNBOrders'])->name("nb-orders");
            Route::get('/nb-pending-orders', [AdminController::class, 'numberOfPendingOrders'])->name("nb-pending-orders");
            Route::get('/nb-approved-orders', [AdminController::class, 'numberOfApprovedOrders'])->name("nb-approved-orders");
            Route::get('/nb-disapproved-orders', [AdminController::class, 'numberOfDeniedOrders'])->name("nb-denied-orders");
            Route::get('/nb-products', [AdminController::class, 'numberOfProducts'])->name("nb-products");
            Route::get('/top-selling', [AdminController::class, 'topSelling'])->name("top-selling");
            Route::get('/nb-customers', [AdminController::class, 'nbCustomers'])->name("nb-customers");
            Route::get('/this-month-customers', [AdminController::class, 'thisMonthCustomers'])->name("this-month-customers");
            Route::get('/last-month-customers', [AdminController::class, 'lastMonthCustomers'])->name("last-month-customers");
            Route::get('/featured', [CustomerController::class, 'getFeatured'])->name("featured");
            Route::post('/new-featured', [AdminController::class, 'newFeatured'])->name("new-featured");
            Route::get('/total-sales', [AdminController::class, 'totalSales'])->name("total-sales");
            Route::get('/total-income', [AdminController::class, 'totalIncome'])->name("total-income");
            Route::get('/products', [AdminController::class, 'products'])->name("products");
            Route::post('/approve-product', [AdminController::class, 'approveProduct'])->name("approve-product");
            Route::post('/disapprove-product', [AdminController::class, 'disapproveProduct'])->name("disapprove-product");
            Route::post('/delete-product', [AdminController::class, 'deleteProduct'])->name("delete-product");
            Route::get('/vendors', [AdminController::class, 'getVendors'])->name("vendors");
            Route::get('/vendors0', [AdminController::class, 'getVendors0'])->name("vendors0");

            Route::post('/approve-vendor', [AdminController::class, 'approveVendor'])->name("approve-vendor");
            Route::post('/disapprove-vendor', [AdminController::class, 'disapproveVendor'])->name("disapprove-vendor");
            Route::post('/pending-vendor', [AdminController::class, 'pendingVendor'])->name("pending-vendor");
            Route::get('/balances', [AdminController::class, 'getBalances'])->name("balances");
            Route::post('/update-commission', [AdminController::class, 'updateCommission'])->name("update-comission");
            Route::get('/reviews', [AdminController::class, 'getReviews'])->name("reviews");
            Route::post('/show-review', [AdminController::class, 'showReview'])->name("show-review");
            Route::post('/hide-review', [AdminController::class, 'hideReview'])->name("hide-review");
            Route::post('/delete-review', [AdminController::class, 'deleteReview'])->name("delete-review");
            Route::get('/orders', [AdminController::class, 'getOrders'])->name("orders");
            Route::post('/approve-order', [AdminController::class, 'approveOrder'])->name("approve-order");
            Route::post('/disapprove-order', [AdminController::class, 'disapproveOrder'])->name("disapprove-order");
            Route::post('/delete-order', [AdminController::class, 'deleteOrder'])->name("delete-order");
            Route::post('/make-transaction', [AdminController::class, 'makeTransaction'])->name("make-transaction");
            Route::post('/get-vendor', [CustomerController::class, 'getVendor'])->name("get-vendor");
            Route::post('/get-balance', [AdminController::class, 'getBalance'])->name("get-balance");

        });
    });


    Route::group(['middleware' => ['role.vednor']], function () {
        Route::group(['prefix' => 'vendor'], function () {
            Route::get('/profile', [UserController::class, 'vendorProfile'])->name("vendor-profile");
            Route::get('/nb-pending-orders', [VendorController::class, 'getNBPendingOrders'])->name("nb-pendning-orders");
            Route::get('/nb-approved-orders', [VendorController::class, 'getNBApprovedOrders'])->name("nb-approved-orders");
            Route::get('/nb-disapproved-orders', [VendorController::class, 'getNBDisapprovedOrders'])->name("nb-disapproved-orders");
            Route::get('/nb-orders', [VendorController::class, 'getNBOrders'])->name("nb-orders");
            Route::get('/nb-products', [VendorController::class, 'getNBProducts'])->name("nb-products");
            Route::get('/top-selling', [VendorController::class, 'topSelling'])->name("top-selling");
            Route::get('/nb-customers', [VendorController::class, 'nbCustomers'])->name("nb-customers");
            Route::get('/this-month-customers', [VendorController::class, 'thisMonthCustomers'])->name("this-month-customers");
            Route::get('/last-month-customers', [VendorController::class, 'lastMonthCustomers'])->name("this-month-customers");
            Route::get('/nb-reviews', [VendorController::class, 'nbReviews'])->name("nb-reviews");
            Route::get('/recent-reviews', [VendorController::class, 'recentReviews'])->name("recent-reviews");
            Route::get('/recent-orders', [VendorController::class, 'recentOrders'])->name("recent-orders");
            Route::get('/total-sales', [VendorController::class, 'totalSales'])->name("total-sales");
            Route::get('/total-payout', [VendorController::class, 'totalPayout'])->name("total-payout");
            Route::get('/products', [VendorController::class, 'getProducts'])->name("products");

            Route::post('/new-product', [VendorController::class, 'newProduct'])->name("new-product");
            Route::post('/update-product', [VendorController::class, 'updateProduct'])->name("update-product");
            Route::post('/delete-product', [AdminController::class, 'deleteProduct'])->name("delete-product");

            Route::get('/orders', [VendorController::class, 'getOrders'])->name("orders");
            Route::get('/customers', [VendorController::class, 'getcustomers'])->name("customers");
            Route::get('/reviews', [VendorController::class, 'getReviews'])->name("reviews");
            Route::post('/update-profile', [VendorController::class, 'updateProfile'])->name("update-profile");
            Route::get('/get-profile', [VendorController::class, 'getProfile'])->name("get-profile");

            Route::post('/upload-banner', [VendorController::class, 'uploadBanner'])->name("upload-banner");
            Route::post('/upload-logo', [VendorController::class, 'uploadLogo'])->name("upload-logo");

        });
    });


    Route::group(['middleware' => ['role.customer']], function () {
        Route::group(['prefix' => 'customer'], function () {
            Route::get('/profile', [UserController::class, 'customerProfile'])->name("customer-profile");
            Route::get('/featured', [CustomerController::class, 'getFeatured'])->name("featured");
            Route::get('/featured-products', [CustomerController::class, 'featuredProducts'])->name("featured-products");
            Route::get('/approved-products', [CustomerController::class, 'approvedProducts'])->name("approved-products");
            Route::post('/love-product', [CustomerController::class, 'loveProduct'])->name("love-product");
            Route::post('/add-to-cart', [CustomerController::class, 'addToCart'])->name("add-to-cart");
            Route::get('/approved-vendors', [CustomerController::class, 'approvedVendors'])->name("approved-vendors");
            Route::post('/flag-product', [CustomerController::class, 'flagProduct'])->name("flag-product");
            Route::post('/flag-vendor', [CustomerController::class, 'flagVendor'])->name("flag-vendor");
            Route::post('/get-vendor', [CustomerController::class, 'getVendor'])->name("get-vendor");
            Route::post('/add-review', [CustomerController::class, 'addReview'])->name("add-review");
            Route::post('/get-product-reviews', [CustomerController::class, 'getProductReviews'])->name("get-product-reviews");
            Route::get('/nb-wishlist', [CustomerController::class, 'nbWishlistItems'])->name("nb-wishlist");
            Route::get('/nb-cart-itmes', [CustomerController::class, 'nbCartItems'])->name("nb-cart-itmes");
            Route::post('/product-by-type', [CustomerController::class, 'productByType'])->name("product-by-type");
            Route::get('/cart-itmes', [CustomerController::class, 'getCartItems'])->name("cart-itmes");
            Route::get('/product-in-stock', [CustomerController::class, 'productsInStock'])->name("product-in-stock");
            Route::post('/get-product-owner', [CustomerController::class, 'getProductOwner'])->name("get-product-owner");
            Route::post('/get-vendor-products', [CustomerController::class, 'getVendorProducts'])->name("get-vendor-products");
            Route::post('/update-cart-item', [CustomerController::class, 'updateQuanitity'])->name("update-cart-item");
            Route::post('/add-billing-info', [CustomerController::class, 'addBillingInfo'])->name("add-billing-info");
            Route::get('/place-order', [CustomerController::class, 'placeOrder'])->name("place-order");
            Route::post('/remove-product-wishlist', [CustomerController::class, 'removeProductFromWishlist'])->name("remove-product-wishlist");
            Route::post('/products-by-category', [CustomerController::class, 'productsByCategory'])->name("products-by-category");
            Route::post('/unflag-product', [CustomerController::class, 'unflagProduct'])->name("unflag-product");
            Route::post('/unflag-vendor', [CustomerController::class, 'unflagVendor'])->name("unflag-vendor");
            Route::post('/remove-from-cart', [CustomerController::class, 'removeCartItem'])->name("remove-from-cart'");
        });
    });


});

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AuthController::class, 'login'])->name("auth-login");
    Route::post('/register', [AuthController::class, 'register'])->name("auth-register");
    Route::get('/notfound', [AuthController::class, 'notFound'])->name('not-found');

});
