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
}
