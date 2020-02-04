<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExcelImportController extends Controller
{
    //product
    public function import_product(Request $request)
    {
        $input = $request->all();
        $request->validate([
            'data.*' => 'required'
        ]);
        foreach ($input['data'] as $item) {
            DB::table('products')->insert([
                'name' => $item['name'],
                'description' => $item['name'],
                'unit' => 'default',
                'category' => 'default',
                'brand' => 'default',
                'inventory_type' => 'inventory_part',
                'default_purchase' => $item['purchase'],
                'default_sale' => $item['sale'],
                'image' => 'images/placeholder/placeholder.png',
                'status' => true,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
        }
    }
}
