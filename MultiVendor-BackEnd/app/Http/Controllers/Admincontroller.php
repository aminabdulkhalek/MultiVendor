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
        $customers = Customer::get();
        return  response()->json([
            'Customers'=>$customers
        ], 201);
    }

}
