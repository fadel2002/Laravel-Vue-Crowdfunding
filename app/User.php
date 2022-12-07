<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use App\Traits\UsesUuid;
use Carbon\Carbon;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable, UsesUuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username', 'name', 'email', 'password', 'role_id', 'photo_profile'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    
    // Relation
    
    public function userHistory()
    {
        return $this->hasOne('App\CampaignHistory', 'user_id');
    }

    public function role(){
        return $this->belongsTo('App\Role');
    }

    public function otpCode(){
        return $this->hasOne('App\OtpCode', 'user_id', 'id');
    }

    public static function boot(){
        parent::boot();

        static::creating( function($model){
            $model->role_id = $model->getRoleUser();
        });

        static::created(function($model){
            $model->generateOtpCode();
        });
    }

    public function getRoleUser(){
        $role = Role::where('name', 'user')->first();

        return $role->id;
    }

    public function generateOtpCode(){
        do{
            $random = mt_rand(100000, 999999);
            $check = OtpCode::where('otp', $random)->first();
        }while ($check);

        $now = Carbon::now();

        $otp_code = OtpCode::updateOrCreate(
            ['user_id' => $this->id],
            [
                'otp' => $random,
                'valid_until' => $now->addMinutes(5)
            ]
        );
    }

    // protected function get_user_role_id(){
    //     $role = \App\Role::where('name', 'user')->first();
    //     return $role->id;
    // }

    // public function isAdmin(){
    //     if ($this->role_id == $this->get_user_role_id() ){
    //         return false;
    //     }
    //     return true;
    // }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }
}
