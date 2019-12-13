<?php

namespace App\Http\Controllers;

use App\PurchaseDetail;
use Illuminate\Http\Request;

class PurchaseDetailController extends Controller
{
    //index
    public function index(){
        return PurchaseDetail::with('product')->with('supplier')
            ->where('purchase_status','received')
            ->where('remain_qty','>=',1)
            ->orderBy('date','desc')
            ->get();
    }
}
