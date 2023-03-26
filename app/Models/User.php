<?php

namespace App\Models;

use App\Notifications\VerifyEmail;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Str;

class User extends Authenticatable implements MustVerifyEmail
{
	use HasApiTokens, HasFactory, Notifiable;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array<int, string>
	 */
	protected $fillable = [
		'firstname',
		'lastname',
		'email',
		'password',
	];

	/**
	 * The attributes that should be hidden for serialization.
	 *
	 * @var array<int, string>
	 */
	protected $hidden = [
		'password',
		'remember_token',
		'verification_token'
	];

	/**
	 * The attributes that should be cast.
	 *
	 * @var array<string, string>
	 */
	protected $casts = [
		'email_verified_at' => 'datetime',
	];

	public function verification_token()
	{
		return $this->hasOne(EmailVerificationToken::class, 'user_id');
	}

	public function createVerificationToken()
	{
		return EmailVerificationToken::create([
			'user_id' => $this->id,
			'token' => Str::random(32),
		]);
	}

	public function routeNotificationForMail(): array|string
	{
		// Return email address and name...
		return [$this->email => $this->firstname . ' ' . $this->lastname];
	}

	public function sendEmailVerificationNotification()
	{
		$this->notify(new VerifyEmail($this->verification_token));
	}
}
