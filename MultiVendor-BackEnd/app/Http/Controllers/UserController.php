<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Product;
use App\Models\Category;
use App\Models\ProductFlag;
use App\Models\Review;
use App\Models\Vendor;
use App\Models\Customer;

class UserController extends Controller
{
    public function userProfile() {
        $user = Auth::user();
        return response()->json($user);
    }

    public function vendorProfile() {
        $user = Auth::user();
        return response()->json($user);
    }

    public function customerProfile() {
        $user = Auth::user();
        return response()->json($user);
    }

    public function adminProfile() {
        $user = Auth::user();
        return response()->json($user);
    }

    public function getName(Request $request){
        $user = User::where('id','=',$request->id)->get()->first();
        $user_name = $user->name;

        return response()->json([
            'Name' => $user_name
        ], 200);
    }

    public function getProduct(Request $request){
        $product = Product::where('id','=',$request->product_id)->get()->first();
        $vendor = Vendor::where('id','=',$product->vendor_id)->get()->first();
        $vendor_name = User::Where('id','=',$vendor->user_id)->get('name')->first()->name;
        $flags = ProductFlag::where('product_id','=',$product->id)->get()->count();
            array_add($product, 'flag', $flags);
            array_add($product, 'product_owner', $vendor_name);
            $reviews = Review::where('product_id','=',$product->id)->get();
            $average_stars = 0;
            $updated_reviews=[];
            if (count($reviews)>0) {
                foreach ($reviews as $review) {
                $average_stars = $average_stars+ $review->stars;
                $customer = Customer::where('id','=',$review->customer_id)->get()->first();
                $customer_name = User::where('id','=',$customer->user_id)->get('name')->first()->name;

                array_add($review,'customer_name',$customer_name);
                array_push($updated_reviews,$review);
                }
                $average_stars = $average_stars/count($reviews);
                array_add($product, 'average_reviews', $average_stars);
                array_add($product, 'reviewz', $updated_reviews);
                array_add($product, 'total_reviews', count($reviews));
            }
            array_add($product, 'average_reviews', 0);
        return response()->json([
            'product' =>$product
        ], 200);
    }
    public function getCategories(){
        $categories = Category::get();

        return response()->json([
            'categories'=>$categories
        ], 200);
    }
}
