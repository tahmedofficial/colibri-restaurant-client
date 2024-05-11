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
                element: <AllFoods></AllFoods>,
                loader: () => fetch("http://localhost:5000/food")
            },
            {
                path: "/singleFood/:id",
                element: <SingleFood></SingleFood>,
                loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`)
            },
            {
                path: "/purchase/:id",
                element: <PrivateRoute><Purchase></Purchase></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`)
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/myAddedFood/:email",
                element: <MyAddedFood></MyAddedFood>,
                loader: ({ params }) => fetch(`http://localhost:5000/myFood/${params.email}`)
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