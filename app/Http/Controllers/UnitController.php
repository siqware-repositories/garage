<?php

namespace App\Http\Controllers;

use App\Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
{
    //index
    public function index(){
        return Unit::all();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required'
        ]);
        $store = new Unit();
        $store->name = $input['name'];
        $store->save();
        return $store;
    }
    //destroy
    public function destroy($id){
        Unit::findOrFail($id)->delete();
    }
}
