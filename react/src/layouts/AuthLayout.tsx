import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const AuthLayout = () => {
	const { state, dispatch } = useAppContext();

	useEffect(() => {
		if (!state.user) return;
		dispatch({ type: "CLEAR_USER" });
	}, [state]);

	return (
		<div>
			<Outlet />
		</div>
	);
};

export default AuthLayout;
