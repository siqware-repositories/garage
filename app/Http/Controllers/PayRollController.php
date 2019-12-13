<?php

namespace App\Http\Controllers;

use App\PayRoll;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PayRollController extends Controller
{
    //index
    public function index(){
        return PayRoll::with('pay_roll_detail')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'date'=>'required',
            'note'=>'required',
            'items.*'=>'required'
        ]);
        $store = new PayRoll();
        $store->date = $input['date'];
        $store->note = $input['note'];
        $store->save();
        foreach ($input['items'] as $item){
            DB::table('pay_roll_details')->insert([
                'pay_roll_id'=>$store->id,
                'employee_id'=>$item['id']['id'],
                'date'=>$input['date'],
                'salary'=>$item['salary'],
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ]);
        }
        return PayRoll::with('pay_roll_detail')->where('id',$store->id)->first();
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'date'=>'required',
            'note'=>'required',
            'items.*'=>'required'
        ]);
        $update = PayRoll::findOrFail($id);
        $update->date = $input['date'];
        $update->note = $input['note'];
        $update->save();
        $update->pay_roll_detail()->delete();
        foreach ($input['items'] as $item){
            DB::table('pay_roll_details')->insert([
                'pay_roll_id'=>$update->id,
                'employee_id'=>$item['id']['id'],
                'date'=>$input['date'],
                'salary'=>$item['salary'],
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ]);
        }
        return PayRoll::with('pay_roll_detail')->where('id',$update->id)->first();
    }
    //destroy
    public function destroy($id){
        PayRoll::findOrFail($id)->delete();
    }
}
