<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller 
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
            'password' => 'required'
        ]);

        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json([
                'error' => 'Email dan Password tidak ditemukan'
            ], 401);
        }

        $data['token'] = $token;

        $data['user'] = auth()->user();

        return response()->json([
            'response_code' => '00',
            'response_message' => 'User berhasil login',
            'data' => $data,
        ], 200);
    }
}
