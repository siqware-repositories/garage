<?php

namespace App\Http\Controllers;

use App\Expense;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExpenseController extends Controller
{
    //index
    public function index(){
        return Expense::with('expense_detail')->orderBy('created_at','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'note'=>'required',
            'date'=>'required',
            'items.*'=>'required'
        ]);
        $store = new Expense();
        $store->note = $input['note'];
        $store->date = $input['date'];
        $store->save();
        foreach ($input['items'] as  $item){
            DB::table('expense_details')->insert([
                'expense_id' => $store->id,
                'description' => $item['description'],
                'type' => $item['type'],
                'balance' => $item['balance'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
        return Expense::with('expense_detail')->orderBy('created_at','desc')->where('id',$store->id)->first();
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'note'=>'required',
            'date'=>'required',
            'items.*'=>'required'
        ]);
        $update = Expense::findOrFail($id);
        $update->note = $input['note'];
        $update->date = $input['date'];
        $update->save();
        $update->expense_detail()->delete();
        foreach ($input['items'] as  $item){
            DB::table('expense_details')->insert([
                'expense_id' => $update->id,
                'description' => $item['description'],
                'type' => $item['type'],
                'balance' => $item['balance'],
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ]);
        }
        return Expense::with('expense_detail')->orderBy('created_at','desc')->where('id',$update->id)->first();
    }
    //destroy
    public function destroy($id){
        Expense::findOrFail($id)->delete();
    }
}
