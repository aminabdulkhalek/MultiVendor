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
}
