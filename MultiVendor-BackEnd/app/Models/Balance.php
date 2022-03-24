<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Balance extends Model
{
    use HasFactory;
    protected $filable = [
        'vendor_id',
        'total_sale',
        'recived_amount',
        'commission_amount',
        'remaining_amount',
    ];
}
