<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Campaign;
use App\CampaignHistory;

class CampaignController extends Controller
{
    public function search($keyword){
        $campaigns = Campaign::select('*')
            ->where('title', 'LIKE', "%".$keyword."%")
            ->get();
        
            $data['campaigns'] = $campaigns;

            return response()->json([
                'response_code' => '00',
                'response_message' => 'data campaigns berhasil ditampilkan',
                'data' => $data
            ], 200);
    }

    public function detail($id){
        $campaign = Campaign::find($id);

        $data['campaign'] = $campaign;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data campaign berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function index(){
        $campaigns = Campaign::paginate(6);

        $data['campaigns'] = $campaigns;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data campaigns berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function random($count){
        $campaigns = Campaign::select('*')
            ->inRandomOrder()
            ->limit($count)
            ->get();

        $data['campaigns'] = $campaigns;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data campaign berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function history(){
        $campaignHistories = CampaignHistory::with('campaign')->where('user_id', '=', auth()->user()->id)->paginate(6);

        $data['campaignHistories'] = $campaignHistories;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data histori campaign berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function detailHistory($id){
        $campaignHistory = CampaignHistory::with('campaign')->find($id);

        $data['campaignHistory'] = $campaignHistory;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data histori campaign berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function updateFund(Request $request, $id){
        $campaign = Campaign::find($id);

        $request->validate([
            'collected' => 'required|integer',
        ]);

        $donation['nominal'] = (int)$campaign->collected;

        $campaign->update(['collected' => (int)$request->collected]);

        $donation['nominal'] = (int)$campaign->collected - (int)$donation['nominal'];

        $donation['sheets'] = (int)$donation['nominal'] / (int)$campaign->price_per_sheet;

        $history = CampaignHistory::create([
            'campaign_id' => $campaign->id,
            'user_id' => auth()->user()->id,
            'donation' => (int)$donation['nominal'],
            'sheets' => (int)$donation['sheets'],
        ]);

        $data['history'] = $history;
        $data['campaign'] = $history->campaign;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data campaign berhasil ditampilkan',
            'data' => $data
        ], 200);
    }

    public function store(Request $request){
        $request->validate([
            'title' => 'required',
            'description'=> 'required',
            'image' => 'required|mimes:jpg,jpeg,png',
            'address' => 'required',
            'required' => 'required|integer',
            'collected' => 'required|integer',
            'price_per_sheet' => 'required|integer',
        ]);

        $campaign = Campaign::create([
            'title' => $request->title,
            'description' => $request->description,
            'address' => $request->address,
            'required' => (int)$request->required,
            'collected' => (int)$request->collected,
            'price_per_sheet' => (int)$request->price_per_sheet,
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_extension = $image->getClientOriginalExtension();
            $image_name = $campaign->id . "." . $image_extension;
            $image_folder = '/images/campaign/';
            $image_location = $image_folder . $image_name;

            try {
                $image->move(public_path($image_folder), $image_name);

                $campaign->update([
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

        $data['campaign'] = $campaign;

        return response()->json([
            'response_code' => '00',
            'response_message' => 'data campaign berhasil ditambahkan',
            'data' => $data
        ], 200);
    }
}
