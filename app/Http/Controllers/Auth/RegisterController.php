<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Events\UserRegisteredEvent;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {        
        $request->validate([
            'email' => 'required|unique:users,email|email',
            'username' => 'required',
            'name' => 'required',
            'password' => 'required',
        ]);

        $request['password'] = bcrypt($request['password']);

        $data_request = $request->all();

        $user = User::create($data_request);

        event(new UserRegisteredEvent($user));


        $data['user'] = $user;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'User behasil didaftarkan, silahkan cek email untuk kode otpnya',
            'data' => $data,
        ]);
    }
}
