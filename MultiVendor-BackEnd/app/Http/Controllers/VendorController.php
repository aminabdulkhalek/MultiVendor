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
            'desc1' => 'required',
            'desc2' => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
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
        return response()->json([
            'orders' => $vendor_orders
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
        return response()->json([
            'customers' => $customers
        ], 200);

    }
    public function getReviews(){
        $vendor =  Auth::user();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $products_ids = Product::where('vendor_id','=',$vendor_info->id)->get('id');
        $reviews  = Review::whereIn('product_id',$products_ids)->get();

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
            'first_name' => 'string',
            'last_name' => 'string',
            'address' => 'string',
            'phone' => 'numeric',

        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $vendor =  Auth::user();
        $vendor->name = $request->first_name.' '.$request->last_name;
        $vendor->save();
        $vendor_info = Vendor::where('user_id','=',$vendor->id)->get()->first();
        $vendor_info->address = $request->address;
        $vendor_info->phone = $request->phone;
        $vendor_info->save();



        return response()->json([
            'message'=> 'profile successfuly updated',
            'profile'=> $vendor_info
        ], 200);
    }
}
