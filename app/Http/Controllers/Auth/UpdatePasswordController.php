<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class UpdatePasswordController extends Controller
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
            'email' => 'required|email',
            'password' => 'required|confirmed|min:6',
        ]);

        $email = User::where('email', $request->email)->first();

        if (!$email){
            return response()->json([
                'response_code' => '01',
                'response_message' => 'Email tidak ditemukan',
            ], 400);
        }

        $email->update([
            'password' => bcrypt($request->password),
        ]);

        return response()->json([
            'response_code' => '00',
            'response_message' => 'Password berhasil diubah',
        ], 200);
    }
}
