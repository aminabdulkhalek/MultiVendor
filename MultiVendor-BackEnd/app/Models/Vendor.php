<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vendor extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'address',
        'phone',
        'logo',
        'commission_rate',
        'banner',
        'instagram_link',
        'facebook_link',
        'twitter_link',
    ];

    /**
     * Get all of the products for the vendor
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products()
    {
        return $this->hasMany(Products::class, 'vendor_id');
    }
    /**
     * Get all of the flags for the vendor
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function flags()
    {
        return $this->hasMany(VendorFlag::class, 'vendor_id');
    }
    /**
     * Get the balance associated with the vendor
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function balance()
    {
        return $this->hasOne(Balance::class, 'vendor_id');
    }
}
