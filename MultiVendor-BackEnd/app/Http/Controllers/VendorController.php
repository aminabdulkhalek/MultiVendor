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
use App\Models\OrderItem;
use App\Models\Category;
use App\Models\ProductFlag;
use Validator;

class VendorController extends Controller
{
    public function getNBPendingOrders(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $pending_orders = Order::where('status','=',0)->get();
        $pending_ids = [];
        foreach($pending_orders as $pending_order){
            array_push($pending_ids,$pending_order->id);
        }
        $order_items = OrderItem::whereIn('order_id',$pending_ids)->get();
        $vendor_orders = [];
        foreach($order_items as $order_item){
            $product = Product::where('id','=',$order_item->product_id)->get()->first();
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            if ($product_owner->id == $vendor_info->id) {
                array_push($vendor_orders, $order_item);
            }
        }
        return response()->json([
            'Nb_pending_orders' => count($vendor_orders)
        ], 200);
    }
    public function getNBApprovedOrders(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $pending_orders = Order::where('status','=',1)->get();
        $pending_ids = [];
        foreach($pending_orders as $pending_order){
            array_push($pending_ids,$pending_order->id);
        }
        $order_items = OrderItem::whereIn('order_id',$pending_ids)->get();
        $vendor_orders = [];
        foreach($order_items as $order_item){
            $product = Product::where('id','=',$order_item->product_id)->get()->first();
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            if ($product_owner->id == $vendor_info->id) {
                array_push($vendor_orders, $order_item);
            }
        }
        return response()->json([
            'nb_approved_orders' => count($vendor_orders)
        ], 200);
    }
    public function getNBdisapprovedOrders(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $pending_orders = Order::where('status','=',2)->get();
        $pending_ids = [];
        foreach($pending_orders as $pending_order){
            array_push($pending_ids,$pending_order->id);
        }
        $order_items = OrderItem::whereIn('order_id',$pending_ids)->get();
        $vendor_orders = [];
        foreach($order_items as $order_item){
            $product = Product::where('id','=',$order_item->product_id)->get()->first();
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            if ($product_owner->id == $vendor_info->id) {
                array_push($vendor_orders, $order_item);
            }
        }
        return response()->json([
            'nb_disapproved_orders' => count($vendor_orders)
        ], 200);
    }
    public function getNBOrders(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();

        $order_items = OrderItem::get();
        $vendor_orders = [];
        foreach($order_items as $order_item){
            $product = Product::where('id','=',$order_item->product_id)->get()->first();
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            if ($product_owner->id == $vendor_info->id) {
                array_push($vendor_orders, $order_item);
            }
        }
        return response()->json([
            'nbOrders' => count($vendor_orders)
        ], 200);
    }
    public function getNBProducts(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $vendor_products = Product::where('vendor_id','=',$vendor_info->id)->get();

        return response()->json([
            'products' => count($vendor_products)
        ], 200);
    }
    public function topSelling(){
        $user = Auth::user();
        $vendor = Vendor::where('user_id','=',$user->id)->get()->first();
        $vednor_products = Product::where('vendor_id','=',$vendor->id)->orderBy('sales', 'desc')->take(3)->get();
        return response()->json([
            'top_selling' =>$vednor_products
        ], 200);
    }
    public function nbCustomers(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();

        $order_items = OrderItem::get();

        $customers_ids = [];
        foreach($order_items as $order_item){
            $product = Product::where('id','=',$order_item->product_id)->get()->first();
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            if ($product_owner->id == $vendor_info->id) {
               $order = Order::where('id','=',$order_item->order_id)->get()->first();
               $customer = Customer::where('id','=',$order->customer_id)->get()->first();
               array_push($customers_ids, $customer->id);
            }
        }
        $customers = Customer::whereIn('id',$customers_ids)->get();
        return response()->json([
            'nbCustomers' => count($customers)
        ], 200);

    }

    public function thisMonthCustomers(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();

        $order_items = OrderItem::get();

        $customers_ids = [];
        foreach($order_items as $order_item){
            $product = Product::where('id','=',$order_item->product_id)->get()->first();
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            if ($product_owner->id == $vendor_info->id) {
               $order = Order::where('id','=',$order_item->order_id)->get()->first();
               $customer = Customer::where('id','=',$order->customer_id)->get()->first();
               array_push($customers_ids, $customer->id);
            }
        }
        $now = Carbon::now();
        $month = $now->format('m');
        $customers = Customer::whereIn('id',$customers_ids)->whereMonth('created_at',$month)->get();


        return response()->json([
            'this_month_customers' => count($customers)
        ], 200);

    }

    public function lastMonthCustomers(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();

        $order_items = OrderItem::get();

        $customers_ids = [];
        foreach($order_items as $order_item){
            $product = Product::where('id','=',$order_item->product_id)->get()->first();
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            if ($product_owner->id == $vendor_info->id) {
               $order = Order::where('id','=',$order_item->order_id)->get()->first();
               $customer = Customer::where('id','=',$order->customer_id)->get()->first();
               array_push($customers_ids, $customer->id);
            }
        }
        $now = Carbon::now();
        $month = $now->subMonth()->month;
        $customers = Customer::whereIn('id',$customers_ids)->whereMonth('created_at',$month)->get();


        return response()->json([
            'last_month_customers' => count($customers)
        ], 200);

    }
    public function nbReviews(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $products_ids = Product::where('vendor_id','=',$vendor_info->id)->get('id');
        $reviews  = Review::whereIn('product_id',$products_ids)->get();

        return response()->json([
            'Reviews'=> count($reviews)
        ], 200);
    }
    public function recentReviews(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $products_ids = Product::where('vendor_id','=',$vendor_info->id)->get('id');
        $reviews  = Review::whereIn('product_id',$products_ids)->take(3)->get();
        foreach ($reviews as $review ) {
            $product_name = Product::where('id','=',$review->product_id)->get('product_name')->first()->product_name;
            array_add($review, 'product_name', $product_name);
        }

        return response()->json([
            'Reviews'=> $reviews
        ], 200);
    }
    public function recentOrders(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $order_items = OrderItem::get();
        $vendor_orders = [];
        foreach($order_items as $order_item){
            $product = Product::where('id','=',$order_item->product_id)->get()->first();
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            if ($product_owner->id == $vendor_info->id) {
                $order = Order::where('id','=',$order_item->order_id)->get()->first();
                $customer = Customer::where('id','=',$order->customer_id)->get()->first();
                $customer_name = User::where('id','=',$customer->user_id)->get('name')->first()->name;
                $product_name = $product->product_name;
                array_add($order_item, 'customer_name', $customer_name);
                array_add($order_item, 'product_name', $product_name);
                array_add($order_item, 'product_price', $product->price);


                array_push($vendor_orders, $order_item);
            }
        }
        return response()->json([
            'recent_orders' => array_slice($vendor_orders,0,3)
        ], 200);
    }

    public function totalsales(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $vendor_balance = Balance::where("vendor_id",'=',$vendor_info->id)->get()->first();
        $total_sales = $vendor_balance->total_sales;

        return response()->json([
            'total_Sales' => $total_sales
        ], 200);
    }
    public function totalPayout(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $vendor_balance = Balance::where("vendor_id",'=',$vendor_info->id)->get()->first();
        $total_payout = $vendor_balance->received_ammount;

        return response()->json([
            'total_payout' => $total_payout
        ], 200);
    }
    public function getProducts(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $vendor_products = Product::where('vendor_id','=',$vendor_info->id)->get();
        
        foreach ($vendor_products as $product ) {
            $flags = ProductFlag::where('product_id','=',$product->id)->get()->count();
            array_add($product, 'flag', $flags);
            $reviews = Review::where('product_id','=',$product->id)->get('stars');
            $average_stars = 0;
            if (count($reviews)>0) {
                foreach ($reviews as $review) { 
                $average_stars = $average_stars+ $review->stars;
                }
                $average_stars = $average_stars/count($reviews);
                array_add($product, 'average_reviews', $average_stars);
            }
            array_add($product, 'average_reviews', 0);
            
            
        }

        return response()->json([
            'products' => $vendor_products
        ], 200);
    }

    public function newProduct(Request $request){
        $validator = Validator::make($request->all(), [
            'product_name' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer|min:1',
            'category_id'=>'required|integer',
            'feature1' => 'required',
            'feature2' => 'required',
            'feature3' => 'required',
            'feature4' => 'required',
            'desc1' => 'required',
            'desc2' => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();

        $product = new Product;
        $product->vendor_id = $vendor_info->id;
        $product->product_name = $request->product_name;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->category_id = $request->category_id;
        $product->feature1 = $request->feature1;
        $product->feature2 = $request->feature2;
        $product->feature3 = $request->feature3;
        $product->feature4 = $request->feature4;
        $product->desc1 = $request->desc1;
        $product->desc2 = $request->desc2;
        $product->save();

        return response()->json([
            'message'=> 'product successfuly created',
            'product'=> $product
        ], 201);
    }



    public function updateProduct(Request $request){
        $validator = Validator::make($request->all(), [
            'product_id' => 'required|numeric',
            'product_name' => 'required|string',
            'price' => 'required|numeric',
            'stock' => 'required|integer|min:1',
            'category_id'=>'required|integer',
            'feature1' => 'required',
            'feature2' => 'required',
            'feature3' => 'required',
            'feature4' => 'required',
            'desc1' => 'required',
            'desc2' => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();

        $product = Product::where('id','=',$request->product_id)->get()->first();
        $product->vendor_id = $vendor_info->id;
        $product->product_name = $request->product_name;
        $product->price = $request->price;
        $product->stock = $request->stock;
        $product->category_id = $request->category_id;
        $product->feature1 = $request->feature1;
        $product->feature2 = $request->feature2;
        $product->feature3 = $request->feature3;
        $product->feature4 = $request->feature4;
        $product->desc1 = $request->desc1;
        $product->desc2 = $request->desc2;
        $product->save();

        return response()->json([
            'message'=> 'product successfuly updated',
            'product'=> $product
        ], 201);
    }
    public function getOrders(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();

        $order_items = OrderItem::get();
        $vendor_orders = [];
        foreach($order_items as $order_item){
            $product = Product::where('id','=',$order_item->product_id)->get()->first();
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            if ($product_owner->id == $vendor_info->id) {
                array_push($vendor_orders, $order_item);
            }
        }
        $result =[];
        foreach ($vendor_orders as $order ) {
                $order_details = Order::where('id','=',$order->order_id)->get();
                foreach ($order_details as $order_info ) {
                    $product = Product::where('id','=',$order->product_id)->get()->first();
                    $customer = Customer::where('id','=',$order_info->customer_id)->get()->first();
                    $product_name= $product->product_name;
                    $customer_name = User::where('id','=',$customer->user_id)->get('name')->first()->name;
                    $customer_email = User::where('id','=',$customer->user_id)->get('email')->first()->email;

                    array_add($order, 'product_name', $product_name);
                    array_add($order, 'product_price', $product->price);
                    array_add($order, 'customer_name', $customer_name);
                    array_add($order, 'customer_email', $customer_email);
                    array_add($order, 'order_status', $order_info->status);
                    array_add($order, 'order_date', date("d/m/Y", strtotime($order_info->created_at)));
                    array_push($result,$order);
                }


        }
        return response()->json([
            'orders' => $result
        ], 200);
    }
    public function getCustomers(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();

        $order_items = OrderItem::get();

        $customers_ids = [];
        foreach($order_items as $order_item){
            $product = Product::where('id','=',$order_item->product_id)->get()->first();
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            if ($product_owner->id == $vendor_info->id) {
               $order = Order::where('id','=',$order_item->order_id)->get()->first();
               $customer = Customer::where('id','=',$order->customer_id)->get()->first();
               array_push($customers_ids, $customer->id);
            }
        }
        $customers = Customer::whereIn('id',$customers_ids)->get();
        foreach ($customers as $customer ) {
            $customer_name = User::where('id','=',$customer->user_id)->get('name')->first()->name;
            $customer_email =User::where('id','=',$customer->user_id)->get('email')->first()->email;
            array_add($customer, 'name', $customer_name);
            array_add($customer, 'email', $customer_email);
            array_add($customer, 'since', date("d-m-Y", strtotime($customer->created_at)));
        }
        return response()->json([
            'customers' => $customers
        ], 200);

    }
    public function getReviews(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $products_ids = Product::where('vendor_id','=',$vendor_info->id)->get('id');
        $reviews  = Review::whereIn('product_id',$products_ids)->get();
        foreach ($reviews as $review ) {
            $customer = Customer::where('id','=',$review->customer_id)->get()->first();
            $customer_name = User::where('id','=',$customer->user_id)->get('name')->first()->name;
            $product_name = Product::where('id','=',$review->product_id)->get('product_name')->first()->product_name;
            array_add($review, 'customer_name', $customer_name);
            array_add($review, 'product_name', $product_name);
            array_add($review, 'review_date', date("d-m-Y", strtotime($review->created_at)));
        }

        return response()->json([
            'Reviews'=> $reviews
        ], 200);
    }
    public function getProfile(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        return response()->json([
            'vendor'=> $vendor_info
        ], 200);
    }

    public function updateProfile(Request $request){
        $validator = Validator::make($request->all(), [
            'first_name' => 'nullable|string',
            'last_name' => 'nullable|string',
            'address' => 'nullable|string',
            'phone' => 'nullable|numeric',
            'facebook'=> 'nullable|url',
            'twitter'=> 'nullable|url',
            'instagram'=> 'nullable|url',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        if($request->first_name || $request->last_name){
            $vendor->name = $request->first_name.' '.$request->last_name;
            $vendor->save();
        }if($request->address){
            $vendor_info->address = $request->address;
        }if($request->phone){
            $vendor_info->phone = $request->phone;
        }if($request->instagram){
            $vendor_info->instagram_link = $request->instagram;
        }if($request->twitter){
            $vendor_info->twitter_link = $request->twitter;
        }
        if($request->facebook){
            $vendor_info->facebook_link = $request->facebook;
        }
        $vendor_info->save();

        return response()->json([
            'message'=> 'profile successfuly updated',
            'profile'=> $vendor_info
        ], 200);
    }
}
