<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Product;
use App\Models\Featured;
use App\Models\Vendor;
use App\Models\WishList;
use App\Models\Customer;
use App\Models\Cart;
use App\Models\CartItem;
use App\Models\ProductFlag;
use App\Models\VendorFlag;

class CustomerController extends Controller
{
    public function getFeatured(){
        $featured_user = Featured::get()->first();
        $vendor = Vendor::where('id','=',$featured_user->vendor_id)->get()->first();
        $vendor_name = User::where('id','=',$vendor->user_id)->get('name')->first()->name;

        return response()->json([
            'featured Vendor' => $featured_user,
            'Vendor Name' =>$vendor_name,
            'vendor info' => $vendor
        ], 200);
    }

    public function featuredProducts(){
        $featured_user = Featured::get()->first();
        $vendor_products = Product::where('vendor_id','=',$featured_user->vendor_id)->take(2)->get();

        return response()->json([
            'products' => $vendor_products
        ], 200);
    }

    public function approvedProducts(){
        $products = Product::where('status','=',1)->get();

        return response()->json([
            "products" => $products
        ], 200);
    }

    public function loveProduct(Request $request){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $wish_item = new WishList;
        $wish_item->customer_id = $customer->id;
        $wish_item->product_id = $request->product_id;
        $wish_item->save();

        return response()->json([
            'message'=> 'products added to your wishlist'
        ], 201);
    }

    public function addToCart(Request $request){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $cart = Cart::where('customer_id','=',$customer->id)->get()->first();
        $cart_item = new CartItem;
        $cart_item->cart_id = $cart->id;
        $cart_item->product_id = $request->product_id;
        $cart_item->quantity = $request->quantity;
        $cart_item->save();
        $cart->number_of_products+=1;
        $cart->save();

        return response()->json([
            'message'=> 'products added to your Cart'
        ], 201);
    }

    public function approvedVendors(){
        $vendors = Vendor::where('status','=',1)->get();

        return response()->json([
            'approved vendors'=> $vendors   
        ], 200);
    }

    public function flagProduct(Request $request){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $flag = new ProductFlag;
        $flag->product_id = $request->product_id;
        $flag->customer_id = $customer->id;
        $flag->save();

        return response()->json([
            'message'=>'product has been flagged'
        ], 201);
    }
    public function flagVendor(Request $request){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $flag = new VendorFlag;
        $flag->vendor_id = $request->vendor_id;
        $flag->customer_id = $customer->id;
        $flag->save();

        return response()->json([
            'message'=>'Vendor has been flagged'
        ], 201);
    }
}
