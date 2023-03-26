<?php

namespace App\Notifications;

use App\Models\EmailVerificationToken;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class VerifyEmail extends Notification
{
	use Queueable;

	private $verification_token;

	/**
	 * Create a new notification instance.
	 */
	public function __construct(EmailVerificationToken $verification_token)
	{
		$this->verification_token = $verification_token->token;
	}

	/**
	 * Get the notification's delivery channels.
	 *
	 * @return array<int, string>
	 */
	public function via(object $notifiable): array
	{
		return ['mail'];
	}

	/**
	 * Get the mail representation of the notification.
	 */
	public function toMail(object $notifiable): MailMessage
	{
		return (new MailMessage)
			->subject('Verify your email address')
			->line('Thank you for the registration in our awesome app.')
			->line('In order to fully use our app, please verify you email adress.')
			->action('Verify email', url(env('FRONTEND_URL', '/') . "/verify?token=$this->verification_token"))
			->line('Thank you for using our application!');
	}

	/**
	 * Get the array representation of the notification.
	 *
	 * @return array<string, mixed>
	 */
	public function toArray(object $notifiable): array
	{
		return [
			//
		];
	}
}
