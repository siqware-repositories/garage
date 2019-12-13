<?php

namespace App\Http\Controllers;

use App\Purchase;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PurchaseController extends Controller
{
    //index
    public function index(){
        return Purchase::with('purchase_detail')->with('supplier')->where('status',true)->orderBy('id','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'supplier.*'=>'required',
            'items.*'=>'required',
            'location'=>'required',
            'purchase_date'=>'required',
            'purchase_status'=>'required',
            'description'=>'required',
            'qty'=>'required',
            'balance'=>'required',
            'due_balance'=>'required',
            'total_balance'=>'required',
        ]);
        $store = new Purchase();
        $store->supplier_id = $input['supplier']['id'];
        $store->user_id = $input['user_id'];
        $store->location = $input['location'];
        $store->date = $input['purchase_date'];
        $store->purchase_status = $input['purchase_status'];
        $store->description = $input['description'];
        $store->qty = $input['qty'];
        $store->balance = $input['balance'];
        $store->due_balance = $input['due_balance'];
        $store->amount = $input['total_balance'];
        $store->save();
        foreach ($input['items'] as $item){
            DB::table('purchase_details')->insert([
                'purchase_id' => $store->id,
                'product_id' => $item['id']['id'],
                'supplier_id' => $input['supplier']['id'],
                'location' => $input['location'],
                'date' => $input['purchase_date'],
                'qty' => $item['qty'],
                'remain_qty' => $item['qty'],
                'purchase' => $item['purchase_price'],
                'sale' => $item['sale_price'],
                'amount' => $item['amount'],
                'purchase_status' => $input['purchase_status'],
                'inventory_type' => $item['inventory_type'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            DB::table('products')->where('id',$item['id']['id'])->update([
                'default_sale'=>$item['sale_price'],
                'default_purchase'=>$item['purchase_price']
            ]);
        }
        return $store;
    }
    //destroy
    public function destroy($id){
        Purchase::findOrFail($id)->delete();
    }
    //payment
    public function payment(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'input_balance'=>'required',
            'due_balance'=>'required',
        ]);
        Purchase::where('id',$id)->increment('balance',$input['input_balance']);
        Purchase::where('id',$id)->update(['due_balance'=>$input['due_balance']]);
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'supplier.*'=>'required',
            'items.*'=>'required',
            'location'=>'required',
            'purchase_date'=>'required',
            'purchase_status'=>'required',
            'description'=>'required',
            'qty'=>'required',
            'balance'=>'required',
            'due_balance'=>'required',
            'total_balance'=>'required',
        ]);
        $update = Purchase::findOrFail($id);
        $update->supplier_id = $input['supplier']['id'];
        $update->user_id = $input['user_id'];
        $update->location = $input['location'];
        $update->date = $input['purchase_date'];
        $update->purchase_status = $input['purchase_status'];
        $update->description = $input['description'];
        $update->qty = $input['qty'];
        $update->balance = $input['balance'];
        $update->due_balance = $input['due_balance'];
        $update->amount = $input['total_balance'];
        $update->save();
        $update->purchase_detail()->delete();
        foreach ($input['items'] as $item){
            DB::table('purchase_details')->insert([
                'purchase_id' => $update->id,
                'product_id' => $item['id']['id'],
                'supplier_id' => $input['supplier']['id'],
                'location' => $input['location'],
                'date' => $input['purchase_date'],
                'qty' => $item['qty'],
                'remain_qty' => $item['qty'],
                'purchase' => $item['purchase_price'],
                'sale' => $item['sale_price'],
                'amount' => $item['amount'],
                'inventory_type' => $item['inventory_type'],
                'purchase_status' => $input['purchase_status'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
            DB::table('products')->where('id',$item['id']['id'])->update([
                'default_sale'=>$item['sale_price'],
                'default_purchase'=>$item['purchase_price']
            ]);
        }
    }
}
