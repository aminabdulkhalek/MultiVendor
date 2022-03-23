<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    protected $fillable = [
        'customer_id',
        'billing_id',
        'cart_id',
        'order_date',
        'total_price'
    ];

    /**
     * Get all of the items for the Order
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(CartItems::class, 'order_id');
    }

    /**
     * Get the billingInfo associated with the Order
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function billingInfo(): HasOne
    {
        return $this->hasOne(BillingInfo::class,'order_id');
        
    }
}
