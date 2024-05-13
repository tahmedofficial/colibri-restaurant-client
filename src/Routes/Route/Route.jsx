import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import Home from "../../Pages/Home/Home";
import AllFoods from "../../Pages/AllFoods/AllFoods";
import Gallery from "../../Pages/Gallery/Gallery";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import SingleFood from "../../Pages/SingleFood/SingleFood";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Purchase from "../../Pages/Purchase/Purchase";
import MyAddedFood from "../../Pages/MyAddedFood/MyAddedFood";
import UpdatePage from "../../Pages/UpdatePage/UpdatePage";
import AddFood from "../../Pages/AddFood/AddFood";
import MyOrderedFood from "../../Pages/MyOrderedFood/MyOrderedFood";

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
                path: "/singleFood/:id",
                element: <SingleFood></SingleFood>,
                loader: ({ params }) => fetch(`https://colibri-restaurant-server.vercel.app/food/${params.id}`)
            },
            {
                path: "/purchase/:id",
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
                loader: ({ params }) => fetch(`https://colibri-restaurant-server.vercel.app/food/${params.id}`)
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/myAddedFood/:email",
                element: <PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>,
                loader: ({ params }) => fetch(`https://colibri-restaurant-server.vercel.app/myFood/${params.email}`)
            },
            {
                path: "/updatePage/:id",
                element: <PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://colibri-restaurant-server.vercel.app/food/${params.id}`)
            },
            {
                path: "/addFood",
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: "/myOrderedFood",
                element: <PrivateRoute><MyOrderedFood></MyOrderedFood></PrivateRoute>
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