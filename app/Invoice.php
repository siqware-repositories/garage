<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    //customer
    public function customer(){
        return $this->belongsTo(Customer::class);
    }
    //invoice detail
    public function invoice_detail(){
        return $this->hasMany(InvoiceDetail::class)->with('purchase_detail');
    }
}
