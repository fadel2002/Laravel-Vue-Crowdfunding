<?php

namespace App\Listeners;

use App\Events\RegenerateOtpEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Mail;
use App\Mail\RegenerateOtpCodeMail;

class SendOtpRegenerateNotificationUserRegistered implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  RegenerateOtpEvent  $event
     * @return void
     */
    public function handle(RegenerateOtpEvent $event)
    {
        Mail::to($event->user)->send(new RegenerateOtpCodeMail($event->user));

    }
}
