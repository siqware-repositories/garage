<?php

namespace App\Http\Controllers;

use App\Supplier;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    //index
    public function index(){
        return Supplier::where('status',true)->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required',
            'company'=>'required',
            'contact'=>'required',
            'address'=>'required',
            'note'=>'required',
        ]);
        $store = new Supplier();
        $store->name = $input['name'];
        $store->company = $input['company'];
        $store->contact = $input['contact'];
        $store->address = $input['address'];
        $store->note = $input['note'];
        $store->save();
        return $store;
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'name'=>'required',
            'company'=>'required',
            'contact'=>'required',
            'address'=>'required',
            'note'=>'required',
        ]);
        $update = Supplier::findOrFail($id);
        $update->name = $input['name'];
        $update->company = $input['company'];
        $update->contact = $input['contact'];
        $update->address = $input['address'];
        $update->note = $input['note'];
        $update->save();
        return $update;
    }
    //destroy
    public function destroy($id){
        Supplier::findOrFail($id)->delete();
    }
}
