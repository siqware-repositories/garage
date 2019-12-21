<?php

namespace App\Http\Controllers;

use App\Investment;
use Illuminate\Http\Request;

class InvestmentController extends Controller
{
    //index
    public function index(){
        return Investment::all();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'description' => 'required',
            'balance' => 'required',
            'date' => 'required'
        ]);
        $store = new Investment();
        $store->description = $input['description'];
        $store->balance = $input['balance'];
        $store->date = $input['date'];
        $store->save();
        return $store;
    }
}
