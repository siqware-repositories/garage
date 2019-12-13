<?php

namespace App\Http\Controllers;

use App\Invoice;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InvoiceController extends Controller
{
    //index
    public function index(){
        return Invoice::with('invoice_detail')->with('customer')->where('status',true)->orderBy('id','desc')->get();
//        return Invoice::with('invoice_detail')->with('supplier')->where('status',true)->orderBy('id','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'customer.*'=>'required',
            'items.*'=>'required',
            'invoice_date'=>'required',
            'invoice_status'=>'required',
            'description'=>'required',
            'qty'=>'required',
            'balance'=>'required',
            'due_balance'=>'required',
            'total_balance'=>'required',
        ]);
        $store = new Invoice();
        $store->customer_id = $input['customer']['id'];
        $store->user_id = $input['user_id'];
        $store->date = $input['invoice_date'];
        $store->invoice_status = $input['invoice_status'];
        $store->description = $input['description'];
        $store->qty = $input['qty'];
        $store->balance = $input['balance'];
        $store->due_balance = $input['due_balance'];
        $store->amount = $input['total_balance'];
        $store->save();
        foreach ($input['items'] as $item){
            DB::table('invoice_details')->insert([
                'invoice_id' => $store->id,
                'purchase_detail_id' => $item['id']['id'],
                'customer_id' => $input['customer']['id'],
                'date' => $input['invoice_date'],
                'qty' => $item['qty'],
                'purchase' => $item['id']['purchase'],
                'sale' => $item['sale_price'],
                'amount' => $item['amount'],
                'invoice_status' => $input['invoice_status'],
                'inventory_type' => $item['inventory_type'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            if ($input['invoice_status']=='received'){
                DB::table('purchase_details')->where('id',$item['id']['id'])->decrement('remain_qty',$item['qty']);
            }
        }
        return $store;
    }
    //destroy
    public function destroy($id){
        Invoice::findOrFail($id)->delete();
    }
    //payment
    public function payment(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'input_balance'=>'required',
            'due_balance'=>'required',
        ]);
        Invoice::where('id',$id)->increment('balance',$input['input_balance']);
        Invoice::where('id',$id)->update(['due_balance'=>$input['due_balance']]);
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'customer.*'=>'required',
            'items.*'=>'required',
            'invoice_date'=>'required',
            'invoice_status'=>'required',
            'description'=>'required',
            'qty'=>'required',
            'balance'=>'required',
            'due_balance'=>'required',
            'total_balance'=>'required',
        ]);
        $update = Invoice::findOrFail($id);
        $update->customer_id = $input['customer']['id'];
        $update->user_id = $input['user_id'];
        $update->date = $input['invoice_date'];
        $update->invoice_status = $input['invoice_status'];
        $update->description = $input['description'];
        $update->qty = $input['qty'];
        $update->balance = $input['balance'];
        $update->due_balance = $input['due_balance'];
        $update->amount = $input['total_balance'];
        $update->save();
        $update->invoice_detail()->delete();
        foreach ($input['items'] as $item){
            DB::table('invoice_details')->insert([
                'invoice_id' => $update->id,
                'purchase_detail_id' => $item['id']['id'],
                'customer_id' => $input['customer']['id'],
                'date' => $input['invoice_date'],
                'qty' => $item['qty'],
                'purchase' => $item['id']['purchase'],
                'sale' => $item['sale_price'],
                'amount' => $item['amount'],
                'invoice_status' => $input['invoice_status'],
                'inventory_type' => $item['inventory_type'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            if ($input['invoice_status']=='received'){
                DB::table('purchase_details')->where('id',$item['id']['id'])->decrement('remain_qty',$item['qty']);
            }
        }
        return $update;
    }
}
