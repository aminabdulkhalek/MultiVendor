<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\OrderItme;

class OrderItem extends Model
{
    use HasFactory;
    protected $filable = ['product_id',"quanitity"];

    /**
     * Get the vendor that owns the OrderItem
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function vendor()
    {
        return $this->belongsTo(Vendor::class, 'product_id');
    }
}
