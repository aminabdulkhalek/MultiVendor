<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [ 
        'vendor_id',
        'category_id',
        'price',
        'stock',
        'status',
        'sales',
        'type',
        'status',
        'feature1',
        'feature2',
        'feature3',
        'feature1',
        'img1',
        'img2',
        'img3',
        'img4',
        'desc1',
        'desc2',
    ];

    /**
     * Get the category associated with the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function category(): HasOne
    {
        return $this->hasOne(Category::class, 'product_id');
    }
    
    /**
     * Get all of the reviews for the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function reviews(): HasMany
    {
        return $this->hasMany(Reviews::class,'product_id');
    }

    /**
     * Get all of the flags for the Product
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function flags(): HasMany
    {
        return $this->hasMany(productFlags::class,'product_id');
    }
}
