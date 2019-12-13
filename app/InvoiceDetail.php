<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InvoiceDetail extends Model
{
    //purchase detail
    public function purchase_detail(){
        return $this->belongsTo(PurchaseDetail::class)->with('product');
    }
}
