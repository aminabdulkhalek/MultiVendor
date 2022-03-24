<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillingInfo extends Model
{
    use HasFactory;
    protected $filable = [
        'order_id',
        'customer_id',
        'country',
        'street_address',
        'city',
        'state',
        'zip-code',
        'phone',
        'email',
        'notes',
    ];
}
