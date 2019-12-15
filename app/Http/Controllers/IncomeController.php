<?php

namespace App\Http\Controllers;

use App\Income;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class IncomeController extends Controller
{
    //index
    public function index(){
        return Income::with('income_detail')->orderBy('created_at','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'note'=>'required',
            'date'=>'required',
            'items.*'=>'required'
        ]);
        $store = new Income();
        $store->note = $input['note'];
        $store->date = $input['date'];
        $store->save();
        foreach ($input['items'] as  $item){
            DB::table('income_details')->insert([
                'income_id' => $store->id,
                'description' => $item['description'],
                'type' => $item['type'],
                'balance' => $item['balance'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
        return Income::with('income_detail')->orderBy('created_at','desc')->where('id',$store->id)->first();
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'note'=>'required',
            'date'=>'required',
            'items.*'=>'required'
        ]);
        $update = Income::findOrFail($id);
        $update->note = $input['note'];
        $update->date = $input['date'];
        $update->save();
        $update->income_detail()->delete();
        foreach ($input['items'] as  $item){
            DB::table('income_details')->insert([
                'income_id' => $update->id,
                'description' => $item['description'],
                'type' => $item['type'],
                'balance' => $item['balance'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
        return Income::with('income_detail')->orderBy('created_at','desc')->where('id',$update->id)->first();
    }
    //destroy
    public function destroy($id){
        Income::findOrFail($id)->delete();
    }
}
