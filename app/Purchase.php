<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    public function purchase_detail(){
        return $this->hasMany(PurchaseDetail::class)->with('product');
    }
    public function purchase_detail_report(){
        return $this->hasMany(PurchaseDetail::class)->with('product');
    }
    public function supplier(){
        return $this->belongsTo(Supplier::class);
    }
}
