<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;
    protected $filable = [
        'Product_id',
        'customer_id',
        'review_status',
        'stars',
        'review_text',
    ];
}
