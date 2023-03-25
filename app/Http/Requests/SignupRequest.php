<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SignupRequest extends FormRequest
{
	/**
	 * Determine if the user is authorized to make this request.
	 */
	public function authorize(): bool
	{
		return true;
	}

	/**
	 * Get the validation rules that apply to the request.
	 *
	 * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
	 */
	public function rules(): array
	{
		return [
			'firstname' => 'required|max:50',
			'lastname' => 'required|max:50',
			'email' => 'email|required|unique:users,email',
			'password' => 'required|confirmed|min:6'
		];
	}

	public function messages()
	{
		return [
			'email.unique' => 'Account with this email address already exists'
		];
	}
}
