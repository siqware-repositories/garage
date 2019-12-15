<?php

namespace App\Http\Controllers;

use App\ExpenseType;
use Illuminate\Http\Request;

class ExpenseTypeController extends Controller
{
    //index
    public function index(){
        return ExpenseType::pluck('type');
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'type'=>'required'
        ]);
        $store = new ExpenseType();
        $store->type = $input['type'];
        $store->save();
        return $store;
    }
    //destroy
    public function destroy($id){
        ExpenseType::findOrFail($id)->delete();
    }
}
