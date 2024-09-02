import { createBrowserRouter } from "react-router-dom";
import { PRIVATE_PATH, PUBLIC_PATHS } from "./path";
import Rootlayout from "../layout/Rootlayout";
import ProtectedRoutes from "../layout/ProtectedRoutes";
import Dashboard from "../modules/dashboard";
import Settings from "../modules/settings";
import Login from "../modules/auth/login";
import Registration from "../modules/auth/registration";

export const routes = createBrowserRouter([
    {
        element: <Rootlayout />,
        children: [
            {
                path: PUBLIC_PATHS.login,
                element: <Login />
            },
            {
                path: PUBLIC_PATHS.registration,
                element: <Registration />
            }
        ]
    },
    {
        element: <ProtectedRoutes children={<Dashboard />} />,
        path: PRIVATE_PATH.dashboard
    },
    {
        element: <ProtectedRoutes children={<Settings />} />,
        path: PRIVATE_PATH.settings
    }
])