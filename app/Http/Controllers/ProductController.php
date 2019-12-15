<?php

namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    //index
    public function index(){
        return Product::where('status',true)->orderBy('id','desc')->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'unit' => 'required',
            'category' => 'required',
            'brand' => 'required',
            'inventory_type' => 'required',
            'default_purchase' => 'required',
            'default_sale' => 'required',
            'image' => 'required'
        ]);
        $store = new Product();
        $store->name = $input['name'];
        $store->description = $input['description'];
        $store->unit = $input['unit']['name'];
        $store->category = $input['category']['name'];
        $store->brand = $input['brand']['name'];
        $store->inventory_type = $input['inventory_type'];
        $store->default_purchase = $input['default_purchase'];
        $store->default_sale = $input['default_sale'];
        $store->image = $input['image'];
        $store->save();
        return Product::find($store->id);
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'name' => 'required',
            'description' => 'required',
            'unit' => 'required',
            'category' => 'required',
            'brand' => 'required',
            'inventory_type' => 'required',
            'default_purchase' => 'required',
            'default_sale' => 'required',
            'image' => 'required'
        ]);
        $update = Product::find($id);
        $update->name = $input['name'];
        $update->description = $input['description'];
        $update->unit = $input['unit']['name'];
        $update->category = $input['category']['name'];
        $update->brand = $input['brand']['name'];
        $update->inventory_type = $input['inventory_type'];
        $update->default_purchase = $input['default_purchase'];
        $update->default_sale = $input['default_sale'];
        $update->image = $input['image'];
        $update->save();
        return Product::find($update->id);
    }
    //destroy
    public function destroy($id){
        $destroy = Product::find($id);
        $destroy->status = !$destroy->status;
        $destroy->save();
    }
}
