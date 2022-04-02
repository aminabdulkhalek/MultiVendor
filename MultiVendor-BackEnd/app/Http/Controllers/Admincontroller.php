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
use App\Models\ProductFlag;
use App\Models\VendorFlag;



class Admincontroller extends Controller
{
    public function getCustomers(){
        $customers = Customer::get();
        foreach ($customers as $customer ) {
            $customer_name = User::where('id','=',$customer->user_id)->get('name')->first()->name;
            $customer_email =User::where('id','=',$customer->user_id)->get('email')->first()->email;
            array_add($customer, 'name', $customer_name);
            array_add($customer, 'email', $customer_email);
            array_add($customer, 'since', date("d/m/Y", strtotime($customer->created_at)));
        }
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
            "Pending_Orders" => $result,


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
            "Approved_Orders" => $result,


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
            "Disapproved_Orders" => $result,


        ], 201);
    }

    public function getTotalNBOrders(){
        return response()->json([
            'nbOrders' =>count( Order::get())
        ], 201);
    }
    public function numberOfPendingOrders(){
        return response()->json([
            'pending_orders' =>count( Order::where('status','=','0')->get())
        ], 201);
    }
    public function numberOfApprovedOrders(){
        return response()->json([
            'approved_orders' =>count( Order::where('status','=','1')->get())
        ], 201);
    }
    public function numberOfDeniedOrders(){
        return response()->json([
            'disapproved_orders' =>count( Order::where('status','=','2')->get())
        ], 201);
    }

    public function numberOfProducts(){
        return response()->json([
            'nbProducts' =>count( Product::get())
        ], 201);
    }

    public function topSelling(){
        $top = Product::orderby('sales','desc')->take(3)->get();

        return response()->json([
                'top_Selling' => $top
            ], 201);
    }

    public function nbCustomers(){
        return response()->json([
            'nbCustomers' =>count( Customer::get())
        ], 201);
    }

    public function thisMonthCustomers(){
        $now = Carbon::now();
        $month = $now->format('m');
        $data = Customer::whereMonth('created_at',$month)->get();

        return response()->json([
            'this_Month_customers' => $data
        ], 201);
    }
    public function lastMonthCustomers(){
        $now = Carbon::now();
        $month = $now->subMonth()->month;
        $data = Customer::whereMonth('created_at',$month)->get();

        return response()->json([
            'Last_Month_customers' => $data
        ], 201);
    }

    public function newFeatured(Request $request){
            Featured::truncate();
            $featured = new Featured;
            $featured->vendor_id = $request->vendor_id;
            $featured -> save();

         return response()->json([
             'message'=> "new Vendor is Fetured",
             "vendor_id" => $featured->id
         ], 201);
    }

    public function totalSales(Request $request){
        $total_sales = Balance::sum('total_sales');

        return response()->json([
            'total_sales' => $total_sales
        ], 201);
    }

    public function totalIncome(){
        $admin =  Auth::user();
        $admin_info = Admin::where('user_id','=',$admin->id)->get()[0];

        return response()->json([
            'total_income' => $admin_info->income
        ], 201);
    }

    public function products(){
        $products = Product::where('status','=','0')->get();
        $result = [];
        foreach ($products as $product) {
            $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();
            $owner_name = User::where('id','=',$product_owner->user_id)->get('name')->first();
            // $product_flags = ProductFlag::where('product_id','=',$product->id)->get();
            array_add($product,'vendor_name',$owner_name->name);
            array_add($product, 'flags','');
            array_add($product, 'reviews','');
            array_push($result,$product);
        }

        return response()->json([
            "products" => $result
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
        $vendors = Vendor::where('status','=','0')->get();
        foreach ($vendors as $vendor ) {
            $vendor_name = User::where('id','=',$vendor->user_id)->get('name')->first();
            $vendor_email = User::where('id','=',$vendor->user_id)->get('email')->first();
            $vendor_flags = VendorFlag::where('vendor_id','=',$vendor->id)->get();
            array_add($vendor,'name',$vendor_name->name);
            array_add($vendor,'email',$vendor_email->email);
            array_add($vendor,'flags',$vendor_flags);
        }
        return  response()->json([
            'Vendors'=>$vendors
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
        foreach ($balances as $balance ) {
            $balance_owner = Vendor::where('id','=',$balance->vendor_id)->get()->first();
            $vendor_name = User::where('id','=',$balance_owner->user_id)->get('name')->first()->name;
            array_add($balance, 'seller_name', $vendor_name);
            array_add($balance, 'commission_rate', $balance_owner->commission_rate);
        }
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
        $reviews = Review::where('review_status','=','0')->get();
        foreach ($reviews as $review ) {
            $product = Product::where('id','=',$review->product_id)->get()->first();
            $seller = Vendor::where('id','=',$product->vendor_id)->get()->first();
            $customer = Customer::where('id','=',$review->customer_id)->get()->first();
            $seller_name = User::where('id','=',$seller->user_id)->get()->first()->name;
            $customer_name = User::where('id','=',$customer->user_id)->get()->first()->name;
            array_add($review, 'seller_name', $seller_name);
            array_add($review, 'product_name', $product->product_name);
            array_add($review, 'customer_name', $customer_name);

        }
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
        $review->review_status  = 2;
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

    public function getOrders(){
        $orders = Order::get();
        $result =[];
        foreach($orders as $order){
            $temp = [];
            $temp = json_encode([
               "id" => $order->id,
                "customer_id" => $order->customer_id,
                "order_date" => $order-> created_at,
                "order_items" => $order->orderItems()->get(),

           ]) ;
           array_push($result,json_decode($temp));
        }

        return response()->json([
            "Orders" => $result,


        ], 201);
    }

    public function approveOrder(Request $request){
        $order_id = $request->order_id;
        $order = Order::where('id','=',$order_id)->get()->first();
        $order->status  = 1;
        $order ->save();
        $order_items =OrderItem::where('order_id','=',$order_id)->get();

        // for ($i=0; $i < count($order_items); $i++) {
            foreach($order_items as $order_item){
                $item_price = product::where('id','=',$order_item->product_id)->get('price')[0]->price;
                $item = product::where('id','=',$order_item->product_id)->get()[0];

                $item_quantity = $order_item->quanitiy;
                if ($item_quantity > $item->stock) {
                    return response()->json([
                        'error' => 'order quantity excceeds available stock'
                    ], 406);
                }
                $item_total = $item_price*$item_quantity;
                // echo($item_total);
                $item_vendor_id = product::where('id','=',$order_item->product_id)->get('vendor_id')[0]->vendor_id;
                $vendor_commission_rate = Vendor::where('id','=',$item_vendor_id)->get()->first()->commission_rate;

                $vendor_balance = Balance::where('vendor_id','=',$item_vendor_id)->get()[0];
                $vendor_balance->total_sales += $item_total;
                $vendor_balance->remaining_ammount += ($item_total*$vendor_commission_rate/100);
                $vendor_balance->save();

                $admin =  Auth::user();
                $admin_info = Admin::where('user_id','=',$admin->id)->get()[0];
                $admin_info->total_balance += $item_total;
                $admin_info->save();


                $item->stock -= $item_quantity;
                $item->sales += $item_quantity;
                $item->save();
            }
        // }

        return response()->json([
            'message' => 'order approved',
            'order' => $order
        ], 201);
    }

    public function DisapproveOrder(Request $request){
        $order_id = $request->order_id;
        $order = Order::where('id','=',$order_id)->get()->first();
        $order->status  = 0;

        $order ->save();
        return response()->json([
            'message' => 'order disapproved',
            'order' => $order
        ], 201);
    }

    public function deleteOrder(Request $request){
        $order_id = $request->order_id;
        Order::where('id','=',$order_id)->first()->delete();

        return response()->json([
            'message' => 'Order deleted'
        ], 201);
    }

    public function makeTransaction(Request $request){

        $vendor_balance = Balance::where('vendor_id','=',$request->vendor_id)->get()->first();
        $vendor_commission_rate = Vendor::where('id','=',$request->vendor_id)->get()->first()->commission_rate;
        if ($vendor_balance->remaining_ammount == 0 ) {
            return response()->json([
                'error'=> 'vendor received all his payments'
            ], 405);
        }
        elseif($request->amount > ($vendor_balance->remaining_ammount)/($vendor_commission_rate/100)){
            return response()->json([
                'error'=> 'amount to be paid excceeds sales made by this vendor'
            ], 406);
        }
        $vendor_balance->received_ammount += ($request->amount - $request->amount*($vendor_commission_rate/100));
        $vendor_balance->save();
        $vendor_balance->remaining_ammount -= ($request->amount - $request->amount*($vendor_commission_rate/100));
        $vendor_balance->save();

        $admin =  Auth::user();
        $admin_info = Admin::where('user_id','=',$admin->id)->get()[0];
        $admin_info->total_balance -= $request->amount;
        $admin_info->income += ($request->amount)*($vendor_commission_rate/100);
        $admin_info->save();

        return response()->json([
            'message' => "transaction complete",
            'Vendor_balance'=> $vendor_balance,
            'admin_info' => $admin_info
        ], 201);
    }
}

