<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\BillingInfo;
use App\Models\OrderItme;

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
     * Get the billingInfo associated with the Order
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function billingInfo()
    {
        return $this->hasOne(BillingInfo::class,'order_id');

    }
    /**
     * Get all of the orderItems for the Order
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class, 'order_id');
    }
}
