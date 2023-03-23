import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import AuthLayout from "./layouts/AuthLayout";
import CreateSurvey from "./views/CreateSurvey";
import Dashboard from "./views/Dashboard";
import EditSurvey from "./views/EditSurvey";
import Login from "./views/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: 'survey/create',
                element: <CreateSurvey />
            },
            {
                path: 'survey/:id',
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
                element: <Login />
            }
        ]
    }
]);

export default router;
