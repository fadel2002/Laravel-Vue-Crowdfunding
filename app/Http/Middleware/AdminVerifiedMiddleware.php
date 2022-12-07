<?php

namespace App\Http\Middleware;

use Closure;
use App\Role;

class AdminVerifiedMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $role_id = auth()->user()->role_id;
        $role = Role::where('id', $role_id)->first();

        if ($role->name == 'admin'){
            return $next($request);
        } 
        
        return response()->json([
            'message' => 'Email anda bukan admin'
        ]);
    }
}