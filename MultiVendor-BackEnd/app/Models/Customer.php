<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;
    protected $fillable = [
        'user-id',
        'country',
        'state',
        'date_of_birth',
        'gender',
        'TAX_number',
    ];

    /**
     * Get the cart associated with the Customer
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function cart(): HasOne
    {
        return $this->hasOne(Cart::class, 'customer_id');
    }
    /**
     * Get the wishList associated with the Customer
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function wishList(): HasOne
    {
        return $this->hasOne(WishList::class, 'customer_id');
    }
}
