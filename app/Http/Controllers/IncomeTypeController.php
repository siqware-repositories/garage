<?php

namespace App\Http\Controllers;

use App\IncomeType;
use Illuminate\Http\Request;

class IncomeTypeController extends Controller
{
    //index
    public function index(){
        return IncomeType::pluck('type');
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'type'=>'required'
        ]);
        $store = new IncomeType();
        $store->type = $input['type'];
        $store->save();
        return $store;
    }
    //destroy
    public function destroy($id){
        IncomeType::findOrFail($id)->delete();
    }
}
