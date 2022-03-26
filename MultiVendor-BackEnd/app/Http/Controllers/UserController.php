<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

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
}
