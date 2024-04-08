import {createBrowserRouter} from "react-router-dom";
import App from "../pages/App.jsx";
import Pokemon from "../pages/Pokemon.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/:name",
        element: <Pokemon />,
    },
]);

export default router;