import { redirect } from "react-router-dom";

export async function authLoader() {
	const token = localStorage.getItem("token");

	if (token) {
		return redirect("/");
	}

	return null;
}

export async function appLoader() {
	const token = localStorage.getItem("token");

	if (!token) {
		return redirect("/auth/login");
	}

	// user request goes here

	return {
		user: {
			id: "123",
			email: "john.doe@email.com",
			firstName: "John",
			lastName: "Doe",
		},
	};
}
