<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;

class UpdateProfileController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $user = auth()->user();

        if ($request->name){
            $user->update([
                'name' => $request->name,
            ]);
        }

        if($request->hasFile('photo_profile')){

            $request->validate([
                'photo_profile' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            ]);

            if($user->photo_profile && file_exists(public_path($user->photo_profile))){
                unlink(public_path($user->photo_profile));
            }

            $imageName = time() . $user->username . '.' . $request->photo_profile->extension();  
            
            $profile_path = "/images/profile/";

            $request->photo_profile->move(public_path($profile_path), $imageName);
           
            $imagePath = $profile_path . $imageName;

            $user->update([
                'photo_profile' => $imagePath,
            ]);
        }

        return response()->json([
            'response_code' => '00',
            'response_message' => 'Profile berhasil diupdate',
            'data' => $user,
        ], 200);
    }
}
