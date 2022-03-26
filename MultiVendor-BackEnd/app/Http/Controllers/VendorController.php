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
}
