import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import CreateSurvey from "../views/CreateSurvey";
import EditSurvey from "../views/EditSurvey";
import Login from "../views/Login";
import Survey from "../views/Survey";
import SurveyList from "../views/SurveyList";
import { loginAction } from "./actions";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <SurveyList />
            },
            {
                path: 'create',
                element: <CreateSurvey />
            },
            {
                path: 'edit/:id',
                element: <EditSurvey />
            }
        ]
    },
    {
        path:'/auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
								action: loginAction
            }
        ]
    },
		{
			path: '/survey/:id',
			element: <Survey />
		}
]);

export default router;
