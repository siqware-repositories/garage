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
Route::resource('/payroll','PayRollController');
Route::resource('/income_type','IncomeTypeController');
Route::resource('/expense_type','ExpenseTypeController');
Route::resource('/income','IncomeController');
Route::resource('/expense','ExpenseController');
Route::resource('/investment','InvestmentController');
Route::post('/auth-change-password/{id}','AuthController@change_password')->name('auth.change.password');
Route::post('/auth-register','AuthController@register')->name('auth.register');
Route::post('/auth-login','AuthController@login')->name('auth.login');
Route::post('/invoice-payment/{id}','InvoiceController@payment')->name('invoice.payment');
Route::post('/purchase-payment/{id}','PurchaseController@payment')->name('purchase.payment');
//report
Route::post('/report-stock','ReportController@stock')->name('report.stock');
Route::post('/report-best-seller','ReportController@best_seller')->name('report.best_seller');
Route::post('/report-close-service','ReportController@service')->name('report.close_service');
Route::post('/report-close-payroll','ReportController@payroll')->name('report.close_payroll');