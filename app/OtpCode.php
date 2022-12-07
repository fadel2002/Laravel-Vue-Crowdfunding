<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\UsesUuid;

class OtpCode extends Model
{
    use UsesUuid;
    
    protected $fillable = ['otp', 'valid_until', 'user_id'];

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
