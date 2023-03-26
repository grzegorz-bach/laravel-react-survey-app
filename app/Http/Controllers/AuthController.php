<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\EmailVerificationToken;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
	public function signup(SignupRequest $request)
	{
		$params = $request->validated();

		$user = User::create([
			'firstname' => $params['firstname'],
			'lastname' => $params['lastname'],
			'email' => $params['email'],
			'password' => bcrypt($params['password'])
		]);

		$user->createVerificationToken();

		event(new Registered($user));

		$token = $user->createToken("main")->plainTextToken;

		return response([
			'user' => $user,
			'token' => $token
		]);
	}

	public function login(LoginRequest $request)
	{
		$params = $request->validated();

		$credentials = [
			'email' => $params['email'],
			'password' => $params['password']
		];

		$remember = $params['remember'] ?? false;

		if (!Auth::attempt($credentials, $remember)) {
			return response([
				'error' => 'The provided credentials are not correct'
			], 422);
		}

		/** @var User $user */
		$user = Auth::user();
		$token = $user->createToken('main')->plainTextToken;

		return response([
			'user' => $user,
			'token' => $token
		]);
	}

	public function logout(Request $request)
	{
		$request->user()->currentAccessToken()->delete();

		return response([
			'success' => true
		]);
	}
}
