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
}
