<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Customer;
use App\Models\Admin;

class Admincontroller extends Controller
{
    public function getCustomers(){
        return $customers = Customer::get();
    }


    public function updateInfo(Request $request){
        $admin = new Admin;
        $admin ->user_id = Auth::user()->id;
        $admin ->total_balance = $request ->total_balance;
        $admin ->income = $request->income ;
        $admin ->save();

        return response()->json([
            'message' => 'Admin info Updated',
            'admin' => $admin,
        ], 201);
    }
}
