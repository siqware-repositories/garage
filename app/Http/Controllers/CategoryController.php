<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //index
    public function index(){
        return Category::all();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required'
        ]);
        $store = new Category();
        $store->name = $input['name'];
        $store->save();
        return $store;
    }
    //destroy
    public function destroy($id){
        Category::findOrFail($id)->delete();
    }
}
