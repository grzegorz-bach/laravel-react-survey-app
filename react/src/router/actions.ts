import { redirect } from "react-router-dom";

export async function loginAction() {

	// login request goes here

	localStorage.setItem("token", "some-auth-token");
	return redirect("/");
}

export async function logoutAction() {
	localStorage.removeItem("token");
	return redirect("/auth/login");
}
