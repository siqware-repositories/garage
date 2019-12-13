<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PayRoll extends Model
{
    public function pay_roll_detail(){
        return $this->hasMany(PayRollDetail::class)->with('employee');
    }
}
