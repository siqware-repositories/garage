<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    //purchase detail
    public function purchase_detail(){
        return $this->hasMany(PurchaseDetail::class)
            ->with('supplier')
            ->where('purchase_status','received');
    }
    public function purchase_detail_report(){
        return $this->hasMany(PurchaseDetail::class,'product_id','id')
            ->where('purchase_status','received');
    }
}
