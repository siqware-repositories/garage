<?php

namespace App\Http\Controllers;

use App\InvoiceDetail;
use App\PayRollDetail;
use App\Product;
use App\Purchase;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    //stock
    public function stock(){
        return Product::with('purchase_detail')->whereIn('inventory_type',['inventory_part','sale_only'])->get();
    }
    //purchase
    public function purchase(){
        return Purchase::all();
    }
    //best seller
    public function best_seller(){
        return Product::with('purchase_detail_report')->whereIn('inventory_type',['sale_only','inventory_part'])->get();
    }
    //service
    public function service(){
        return InvoiceDetail::where('inventory_type','service')->get();
    }
    //payroll
    public function payroll(){
        return PayRollDetail::all();
    }
}
