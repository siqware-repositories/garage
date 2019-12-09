<?php

namespace App\Http\Controllers;

use App\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{
    //index
    public function index(){
        return Brand::all();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required'
        ]);
        $store = new Brand();
        $store->name = $input['name'];
        $store->save();
        return $store;
    }
    //destroy
    public function destroy($id){
        Brand::findOrFail($id)->delete();
    }
}
