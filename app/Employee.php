<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    //user
    public function user(){
        return $this->belongsTo(User::class);
    }
}
