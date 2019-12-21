<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class FileUploadController extends Controller
{
    public function upload(Request $request){
        $file = $request->file('file');
        $img = Image::make($file)->encode('jpg',90);
        $name = uniqid().'-'.time() . '.jpg';
        $store = Storage::disk('public')->put($name, $img);
        return Storage::url($name);
    }
    public function upload_thumb(Request $request){
        $file = $request->file('file');
        $img = Image::make($file)->fit(400, 400)->encode('jpg',75);
        $name = uniqid().'-'.time() . '.jpg';
        Storage::disk('public')->put($name, $img);
        return response()->json(['path'=>Storage::url($name)]);
    }
}
