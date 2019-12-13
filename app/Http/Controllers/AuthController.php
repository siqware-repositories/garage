<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //index
    public function index(){
        return User::where('status',true)->get();
    }
    //store
    public function store(Request $request){
        $validData = $request->validate([
            'name'=>'required',
            'email'=>'required',
            'password'=>'required',
            'profile'=>'required',
        ]);
        $validData['password'] = Hash::make($validData['password']);
        $store = new User();
        $store->name = $validData['name'];
        $store->email = $validData['email'];
        $store->password = $validData['password'];
        $store->profile = $validData['profile'];
        $store->save();
        return $store;
    }
    //update
    public function update(Request $request,$id){
        $validData = $request->validate([
            'name'=>'required',
            'email'=>'required',
            'profile'=>'required',
        ]);
        $update = User::findOrFail($id);
        $update->name = $validData['name'];
        $update->email = $validData['email'];
        $update->profile = $validData['profile'];
        $update->save();
        return $update;
    }
    //change_password
    public function change_password(Request $request,$id){
        $validData = $request->validate([
            'password'=>'required'
        ]);
        $update = User::findOrFail($id);
        $update->password = Hash::make($validData['password']);
        $update->save();
    }
    //register
    public function register(Request $request){
        $validData = $request->validate([
            'name'=>'required',
            'email'=>'required',
            'password'=>'required',
            'profile'=>'required',
        ]);
        $validData['password'] = Hash::make($validData['password']);
        $user = new User();
        $user->name = $validData['name'];
        $user->email = $validData['email'];
        $user->password = $validData['password'];
        $user->profile = $validData['profile'];
        $user->save();
        $accessToken = $user->createToken('authToken')->accessToken;
        return response()->json(['user'=>$user,'access_token'=>$accessToken]);
    }
    //register
    public function login(Request $request){
        $loginData = $request->validate([
            'email'=>'required',
            'password'=>'required',
        ]);
        if (!auth()->attempt($loginData)){
            return response()->json(['message'=>'Invalid Credentials']);
        }
        $accessToken = auth()->user()->createToken('authToken')->accessToken;
        return response()->json(['user'=>auth()->user(),'access_token'=>$accessToken]);
    }
    //destroy as status false
    public function destroy($id){
        $toggle = User::findOrFail($id);
        $toggle->status = false;
        $toggle->save();
    }
}
