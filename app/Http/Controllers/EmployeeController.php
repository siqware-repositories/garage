<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    //index
    public function index(){
        return Employee::with('user')->where('status',true)->get();
    }
    //store
    public function store(Request $request){
        $input = $request->all();
        $request->validate([
            'name'=>'required',
            'contact'=>'required',
            'address'=>'required',
            'gender'=>'required',
            'dob'=>'required',
            'profile'=>'required',
            'user_id.*'=>'required'
        ]);
        $store = new Employee();
        $store->name = $input['name'];
        $store->contact = $input['contact'];
        $store->address = $input['address'];
        $store->gender = $input['gender'];
        $store->dob = $input['dob'];
        $store->profile = $input['profile'];
        $store->user_id = $input['user_id']['id'];
        $store->save();
        return Employee::with('user')->where('status',true)->where('id',$store->id)->first();
    }
    //update
    public function update(Request $request,$id){
        $input = $request->all();
        $request->validate([
            'name'=>'required',
            'contact'=>'required',
            'address'=>'required',
            'gender'=>'required',
            'dob'=>'required',
            'profile'=>'required',
            'user_id.*'=>'required'
        ]);
        $store = Employee::findOrFail($id);
        $store->name = $input['name'];
        $store->contact = $input['contact'];
        $store->address = $input['address'];
        $store->gender = $input['gender'];
        $store->dob = $input['dob'];
        $store->profile = $input['profile'];
        $store->user_id = $input['user_id']['id'];
        $store->save();
        return Employee::with('user')->where('status',true)->where('id',$store->id)->first();
    }
    //destroy
    public function destroy($id){
        $toggle = Employee::findOrFail($id);
        $toggle->status =false;
        $toggle->save();
    }
}
