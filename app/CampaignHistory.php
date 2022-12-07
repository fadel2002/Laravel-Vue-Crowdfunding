<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\UsesUuid;

class CampaignHistory extends Model
{
    use UsesUuid;

    protected $guarded = [];
    
    public function campaign()
    {
        return $this->belongsTo('App\Campaign', 'campaign_id');
    }

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
}
