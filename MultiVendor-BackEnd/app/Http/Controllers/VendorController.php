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
            'Nb of pending orders' => count($vendor_orders)
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
            'Nb of approved orders' => count($vendor_orders)
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
            'Nb of disapproved orders' => count($vendor_orders)
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
            'Nb of orders' => count($vendor_orders)
        ], 200);
    }
    public function topSelling(){
        $user = Auth::user();
        $vendor = Vendor::where('user_id','=',$user->id)->get()->first();
        $vednor_products = Product::where('vendor_id','=',$vendor->id)->orderBy('sales', 'desc')->take(3)->get();
        return response()->json([
            'top Selling products' =>$vednor_products
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
            'Nb of customers' => count($customers)
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
            'This Month customers' => count($customers)
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
            'Last Month customers' => count($customers)
        ], 200);
        
    }
}
