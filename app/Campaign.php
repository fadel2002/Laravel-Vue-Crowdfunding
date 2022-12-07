<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Traits\UsesUuid;

class Campaign extends Model
{
    use UsesUuid;

    protected $guarded= [];

    public function campaignHistory()
    {
        return $this->belongsTo('App\CampaignHistory', 'campaign_id');
    }
}
