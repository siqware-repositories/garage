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
        return Product::with('purchase_detail')->whereNotIn('inventory_type',['service'])->get();
    }
    //check_stock
    public function check_stock(Request $request){
        $products = new Product();
        $products = $products->with('purchase_detail')
            ->whereNotIn('inventory_type',['service']);
        if ($request->input('id')) {
            $products = $products->where('id',$request->input('id'));
        }
        if ($request->input('name')) {
            $products = $products->where('name', 'like', '%' . $request->input('name') . '%');
        }
        return $products->first();
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
    //report api
    /*public function report_api(Request $request){
        return Purchase::with()->whereBetween();
    }*/
    public function product_api(Request $request){
        return Product::where('name', 'like', '%' . $request->input('name') . '%')
            ->limit(5)
            ->get();
    }
}
