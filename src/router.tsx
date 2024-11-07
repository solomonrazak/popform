import { createBrowserRouter } from "react-router-dom";
import Profile from "./pages/profile";
import Billing from "./pages/billing";
import Workspace from "./pages/workspace";
import Layout from "./layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Profile />,
            },
            {
                path: "/billing",
                element: <Billing />,
            },
            {
                path: "/workspace",
                element: <Workspace />
            },
        ]
    }
])

export default router;