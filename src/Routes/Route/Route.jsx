import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import AllFoods from "../../Pages/AllFoods/AllFoods";
import Gallery from "../../Pages/Gallery/Gallery";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allFoods",
                element: <AllFoods></AllFoods>
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router