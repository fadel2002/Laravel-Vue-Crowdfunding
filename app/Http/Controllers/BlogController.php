<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Blog;

class BlogController extends Controller
{
    public function random($count){
        $blogs = Blog::select('*')
            ->inRandomOrder()
            ->limit($count)
            ->get();

        $data['blogs'] = $blogs;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data blogs berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function detail($id){
        $blog = Blog::find($id);

        $data['blog'] = $blog;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data blog berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function index(){
        $blogs = Blog::paginate(6);

        $data['blogs'] = $blogs;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data blogs berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function store(Request $request){
        $request->validate([
            'title' => 'required',
            'description'=> 'required',
            'image' => 'required|mimes:jpg,jpeg,png',
            'address' => 'required',
        ]);

        $blog = Blog::create([
            'title' => $request->title,
            'description' => $request->description,
            'address' => $request->address,
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_extension = $image->getClientOriginalExtension();
            $image_name = $blog->id . "." . $image_extension;
            $image_folder = '/images/blog/';
            $image_location = $image_folder . $image_name;

            try {
                $image->move(public_path($image_folder), $image_name);

                $blog->update([
                    'image' => $image_location
                ]);
            } catch (\Exception $e){
                return response()->json([
                    'response_code' => '01',
                    'response_message' => 'photo gagal upload',
                    'data' => $data
                ]);
            }
        }

        $data['blog'] = $blog;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data blog berhasil ditambahkan',
            'data' => $data
        ], 200);
    }
}
