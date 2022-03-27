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
use App\Models\Review;
use App\Models\BillingInfo;
use App\Models\Order;
use App\Models\OrderItem;
use Validator;

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

    public function getVendor(Request $request){
        $vendor  = Vendor::where('id','=',$request->vendor_id)->get()->first();
        return response()->json([
            'vendor' => $vendor
        ], 200);
    }


    public function addReview(Request $request){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $review = new Review;
        $review->product_id = $request->product_id;
        $review->customer_id = $customer->id;
        $review->stars = $request->stars;
        $review->review_comment = $request->review_comment;
        $review->save();

        return response()->json([
            'message' => 'Review successfully added'
        ], 201);
    }

    public function getProductReviews(Request $request){
        $reviews = Review::where('product_id','=',$request->product_id)->get();

        return response()->json([
            "reviews" => $reviews
        ], 200);
    }

    public function nbWishlistItems(){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $wishlist_items = Wishlist::where('customer_id','=',$customer->id)->get('product_id');

        return response()->json([
            'WishList items' => count($wishlist_items)
        ], 200);
    }
    public function nbCartItems(){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $cart = Cart::where('customer_id','=',$customer->id)->get()->first();
        $cart_items = CartItem::where('cart_id','=',$cart->id)->get('product_id');

        return response()->json([
            'Cart items' => count($cart_items)
        ], 200);
    }
    public function productByType(Request $request){
        $products = Product::where('status','=',1)
                            ->where('type','=',$request->type)
                            ->get();

        return response()->json([
            'products' => $products
        ], 200);
    }
    public function getCartItems(){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $cart = Cart::where('customer_id','=',$customer->id)->get()->first();
        $cart_items = CartItem::where('cart_id','=',$cart->id)->get('product_id');

        return response()->json([
            'Cart items' => $cart_items
        ], 200);
    }
    public function productsInStock(){
        $products = Product::where('stock','>=',1)
                            ->where('status','=',1)
                            ->get();

        return response()->json([
            "products instock" => $products
        ], 200);
    }
    public function getProductOwner(Request $request){
        $product = product::where('id','=',$request->product_id)->get()->first();
        $product_owner = Vendor::where('id','=',$product->vendor_id)->get()->first();

        return response()->json([
            'Vendor' => $product_owner
        ], 200);
    }
    public function getVendorProducts(Request $request){
        $products = Product::where('vendor_id','=',$request->vendor_id)
                            ->where('status','=',1)
                            ->get();

        return response()->json([
            "Vendor's Products" => $products
        ], 200);
    }
    public function updateQuanitity(Request $request){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $cart_item  = CartItem::where('id','=',$request->cart_item_id)->get()->first();
        $product = Product::where('id','=',$cart_item->product_id)->get()->first();
        if($request->quantity > $product->stock){
            return response()->json([
                'error' => 'Quantity required excceeds product stock'
            ], 406);
        }
        $cart_item->quantity = $request->quantity;
        $cart_item->save();
        
        return response()->json([
            'message' => 'cart item successfuly updated',
            'cart item' => $cart_item
        ], 200);
    }

    public function addBillingInfo(Request $request){
        
        $validator = Validator::make($request->all(), [
            'order_id' => 'required|numeric',
            'country' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'street_address'=>'required|string',
            'state' => 'required|string',
            'email' => 'required|email',
            'zip_code' => 'required|integer|min:4',
            'phone' => 'required|integer',
            // 'notes' => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors()->toJson(), 400);
        }
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $billing_info = new BillingInfo;

        $billing_info->customer_id = $customer->id;
        $billing_info->order_id = $request->order_id;
        $billing_info->country = $request->country;
        $billing_info->street_address = $request->street_address;
        $billing_info->city = $request->city;
        $billing_info->state = $request->state;
        $billing_info->email = $request->email;
        $billing_info->zip_code = $request->zip_code;
        $billing_info->phone = $request->phone;
        $billing_info->notes = $request->notes;

        $billing_info->save();

        return response()->json([
            'message' => 'billing info added to ur order',
            'billing Info' => $billing_info
        ], 201);
    }

    public function placeOrder(){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();
        $order  = new Order;
        $order->customer_id = $customer->id;
        $order->save();

        $cart = Cart::where('customer_id','=',$customer->id)->get()->first();
        $cart_items = CartItem::where('cart_id','=',$cart->id)->get();

        foreach($cart_items as $cart_item){
            $order_item = new OrderItem;
            $order_item->order_id = $order->id;
            $order_item->product_id = $cart_item->product_id;
            $order_item->quantity = $cart_item->quantity;
        }

        $cart_items = CartItem::where('cart_id','=',$cart->id)->delete();

        $cart->number_of_products = 0;
        $cart->save();

        return response()->json([
            'message' => 'order placed and now waiting for aproval'
        ], 201);
    }

    public function removeProductFromWishlist(Request $request){
        $user =  Auth::user();
        $customer = Customer::where('user_id','=',$user->id)->get()->first();

        $product = WishList::where('customer_id','=',$customer->id)
                            ->where('product_id','=',$request->product_id)
                            ->delete();

        return response()->json([
            'message' => 'product removed form You wishlist'
        ], 201);
    }
}

