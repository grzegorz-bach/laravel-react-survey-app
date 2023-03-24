import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import CreateSurvey from "../views/CreateSurvey";
import EditSurvey from "../views/EditSurvey";
import Login from "../views/Login";
import Survey from "../views/Survey";
import SurveyList from "../views/SurveyList";
import { loginAction, logoutAction } from "./actions";
import { appLoader, authLoader } from "./loaders";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		loader: appLoader,
		children: [
			{
				index: true,
				element: <SurveyList />,
			},
			{
				path: "create",
				element: <CreateSurvey />,
			},
			{
				path: "edit/:id",
				element: <EditSurvey />,
			},
		],
	},
	{
		path: "/auth",
		element: <AuthLayout />,
		loader: authLoader,
		children: [
			{
				path: "login",
				element: <Login />,
				action: loginAction,
			},
		],
	},
	{
		path: "/survey/:id",
		element: <Survey />,
	},
	{
		path: "/logout",
		action: logoutAction,
	},
]);

export default router;
