<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\Events\RegenerateOtpEvent;

class RegenerateOtpCodeController extends Controller
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
            'email' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        $user->generateOtpCode();

        event(new RegenerateOtpEvent($user));

        $data['user'] = $user;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'otp berhasil digenerate',
            'data' => $data,
        ]);
    }
}
