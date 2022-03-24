<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Customer;

class Admincontroller extends Controller
{
    public function getCustomers(){
        return $customers = Customer::get();
    }
}
