<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Customer;
use App\Models\Admin;
use App\Models\Order;
use App\Models\Product;
use Carbon\Carbon;
use App\Models\Featured;
use App\Models\Balance;
use App\Models\Vendor;
use App\Models\Review;

class Admincontroller extends Controller
{
    public function getCustomers(){
        $customers = Customer::get();
        return  response()->json([
            'Customers'=>$customers
        ], 201);
    }

    public function getPendingOrders(){
        $pending_orders = Order::where('status','=','0')->get();
        $result =[];
        foreach($pending_orders as $pending_order){
            $temp = [];
            $temp = json_encode([
               "id" => $pending_order->id,
                "customer_id" => $pending_order->customer_id,
                "order_date" => $pending_order-> created_at,
                "order_items" => $pending_order->orderItems()->get(),

           ]) ;
           array_push($result,json_decode($temp));
        }

        return response()->json([
            "Pending Orders" => $result,


        ], 201);
    }

    public function getApprovedOrders(){
        $approved_orders = Order::where('status','=','1')->get();
        $result =[];
        foreach($approved_orders as $approved_order){
            $temp = [];
            $temp = json_encode([
               "id" => $approved_order->id,
                "customer_id" => $approved_order->customer_id,
                "order_date" => $approved_order-> created_at,
                "order_items" => $approved_order->orderItems()->get(),

           ]) ;
           array_push($result,json_decode($temp));
        }

        return response()->json([
            "Approved Orders" => $result,


        ], 201);
    }

    public function getDisapprovedOrders(){
        $disapproved_orders = Order::where('status','=','2')->get();
        $result =[];
        foreach($disapproved_orders as $disapproved_order){
            $temp = [];
            $temp = json_encode([
               "id" => $disapproved_order->id,
                "customer_id" => $disapproved_order->customer_id,
                "order_date" => $disapproved_order-> created_at,
                "order_items" => $disapproved_order->orderItems()->get(),

           ]) ;
           array_push($result,json_decode($temp));
        }

        return response()->json([
            "Disapproved Orders" => $result,


        ], 201);
    }

    public function getTotalNBOrders(){
        return response()->json([
            'Total nb of orders' =>count( Order::get())
        ], 201);
    }
    public function numberOfPendingOrders(){
        return response()->json([
            'pending orders' =>count( Order::where('status','=','0')->get())
        ], 201);
    }
    public function numberOfApprovedOrders(){
        return response()->json([
            'approved orders' =>count( Order::where('status','=','1')->get())
        ], 201);
    }
    public function numberOfDeniedOrders(){
        return response()->json([
            'disapproved orders' =>count( Order::where('status','=','2')->get())
        ], 201);
    }

    public function numberOfProducts(){
        return response()->json([
            'nb of Products' =>count( Product::get())
        ], 201);
    }

    public function topSelling(){
        $top = Product::orderby('sales','desc')->take(3)->get();

        return response()->json([
                'top Selling  Products' => $top
            ], 201);
    }

    public function nbCustomers(){
        return response()->json([
            'nb of customers' =>count( Customer::get())
        ], 201);
    }

    public function thisMonthCustomers(){
        $now = Carbon::now();
        $month = $now->format('m');
        $data = Customer::whereMonth('created_at',$month)->get();

        return response()->json([
            'this Month customers' => $data
        ], 201);
    }
    public function lastMonthCustomers(){
        $now = Carbon::now();
        $month = $now->subMonth()->month;
        $data = Customer::whereMonth('created_at',$month)->get();

        return response()->json([
            'Last Month customers' => $data
        ], 201);
    }

    public function newFeatured(Request $request){
            Featured::truncate();
            $featured = new Featured;
            $featured->vendor_id = $request->vendor_id;
            $featured -> save();

         return response()->json([
             'message'=> "new Vendor is Fetured",
             "vendor id" => $featured->id
         ], 201);
    }

    public function totalSales(Request $request){
        $total_sales = Balance::sum('total_sales');

        return response()->json([
            'total sales' => $total_sales
        ], 201);
    }

    public function totalIncome(){
        $admin =  Auth::user();
        $admin_info = Admin::where('user_id','=',$admin->id)->get()[0];

        return response()->json([
            'total income' => $admin_info->income
        ], 201);
    }

    public function totalProducts(){
        $total_nb_products = count(Product::get());

        return response()->json([
            "total number of products" => $total_nb_products
        ], 201);
    }

    public function approveProduct(Request $request){
        $product_id = $request->product_id;
        $product = Product::where('id','=',$product_id)->get()->first();
        $product->status  = 1;
        $product ->save();

        return response()->json([
            'message' => 'product approved',
            'product' => $product
        ], 201);
    }

    public function disapproveProduct(Request $request){
        $product_id = $request->product_id;
        $product = Product::where('id','=',$product_id)->get()->first();
        $product->status  = 2;
        $product ->save();

        return response()->json([
            'message' => 'Product Disapproved',
            'product' => $product
        ], 201);
    }

    public function deleteProduct(Request $request){
        $product_id = $request->product_id;
        Product::where('id','=',$product_id)->first()->delete();

        return response()->json([
            'message' => 'Product deleted'
        ], 201);
    }

    public function getVendors(){
        $vendor = Vendor::get();
        return  response()->json([
            'Vendors'=>$vendor
        ], 201);
    }

    public function pendingVendor(Request $request){
        $vendor_id = $request->vendor_id;
        $vendor = Vendor::where('id','=',$vendor_id)->get()->first();
        $vendor->status  = 0;
        $vendor ->save();

        return response()->json([
            'message' => 'vendor status is Pending',
            'vendor' => $vendor
        ], 201);
    }

    public function approveVendor(Request $request){
        $vendor_id = $request->vendor_id;
        $vendor = Vendor::where('id','=',$vendor_id)->get()->first();
        $vendor->status  = 1;
        $vendor ->save();

        return response()->json([
            'message' => 'vendor approved',
            'vendor' => $vendor
        ], 201);
    }

    public function disapprovevendor(Request $request){
        $vendor_id = $request->vendor_id;
        $vendor = vendor::where('id','=',$vendor_id)->get()->first();
        $vendor->status  = 2;
        $vendor ->save();

        return response()->json([
            'message' => 'vendor Disapproved',
            'vendor' => $vendor
        ], 201);
    }

    public function getBalances(){
        $balances = Balance::get();

        return response()->json([
            'Balances' => $balances
        ], 201);
    }

    public function updateCommission(Request $request){
        $vendor_id = $request->vendor_id;
        $vendor = vendor::where('id','=',$vendor_id)->get()->first();
        $vendor->commission_rate  = $request->commission_rate;
        $vendor ->save();

        return response()->json([
            'message' => "commisssion rate updated",
            'vendor' => $vendor
        ], 201);
    }

    public function getReviews(){
        $reviews = Review::get();

        return response()->json([
            'Reviews'=> $reviews
        ], 201);
    }

    public function showReview(Request $request){
        $review_id = $request->review_id;
        $review = review::where('id','=',$review_id)->get()->first();
        $review->review_status  = 1;
        $review ->save();

        return response()->json([
            'message' => "Review is now public",
            'review' => $review
        ], 201);
    }
    public function hideReview(Request $request){
        $review_id = $request->review_id;
        $review = review::where('id','=',$review_id)->get()->first();
        $review->review_status  = 0;
        $review ->save();

        return response()->json([
            'message' => "Review is hidden",
            'review' => $review
        ], 201);
    }
    public function deleteReview(Request $request){
        $review_id = $request->review_id;
        Review::where('id','=',$review_id)->first()->delete();

        return response()->json([
            'message' => 'Review deleted'
        ], 201);
    }
}

