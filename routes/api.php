<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/file-upload','FileUploadController@upload')->name('file.upload');
Route::post('/file-upload-thumb','FileUploadController@upload_thumb')->name('file.upload.thumb');
Route::resource('/product','ProductController');
Route::resource('/unit','UnitController');
Route::resource('/category','CategoryController');
Route::resource('/brand','BrandController');
Route::resource('/supplier','SupplierController');
Route::resource('/purchase','PurchaseController');
Route::resource('/purchase-detail','PurchaseDetailController');
Route::resource('/customer','CustomerController');
Route::resource('/invoice','InvoiceController');
Route::resource('/employee','EmployeeController');
Route::resource('/auth','AuthController');
Route::post('/auth-change-password/{id}','AuthController@change_password')->name('auth.change.password');
Route::post('/auth-register','AuthController@register')->name('auth.register');
Route::post('/auth-login','AuthController@login')->name('auth.login');
Route::post('/invoice-payment/{id}','InvoiceController@payment')->name('invoice.payment');
Route::post('/purchase-payment/{id}','PurchaseController@payment')->name('purchase.payment');