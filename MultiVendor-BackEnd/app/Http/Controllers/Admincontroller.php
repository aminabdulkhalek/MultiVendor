<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Customer;
use App\Models\Admin;
use App\Models\Order;


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
}
