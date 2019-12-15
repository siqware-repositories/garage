<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    //expense
    public function expense_detail(){
        return $this->hasMany(ExpenseDetail::class);
    }
}
