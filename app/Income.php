<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    //income
    public function income_detail(){
        return $this->hasMany(IncomeDetail::class);
    }
}
