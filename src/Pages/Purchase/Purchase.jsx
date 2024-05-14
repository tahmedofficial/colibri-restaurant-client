import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import axios from "axios";
import Processing from "../Processing/Processing";
import { Helmet } from "react-helmet-async";

const Purchase = () => {

    const singleFood = useLoaderData();
    const { user, setControl, control, sweetMessage, errorMessage } = useContext(AuthContext);
    const navigate = useNavigate();
    const [controlButton, setControlButton] = useState(false);
    const [showProcessing, setShowProcessing] = useState(false);
    const { _id, foodName, price, image, quantity, foodCategory, totalOrders } = singleFood;
    const name = user?.displayName;
    const email = user?.email;
    const date = new Date()
    const dateStr = date.toLocaleString()
    const dateTime = dateStr.split(",");
    const myDate = dateTime[0];
    const time = dateTime[1];

    const handlePurchase = () => {
        setShowProcessing(true);
        const data = { totalOrders };
        const quantityData = { quantity };
        const orderedInfo = { foodName, price, image, name, email, myDate, time }

        if (user?.email === singleFood?.email) {
            errorMessage("You cannot purchase your own food")
            setShowProcessing(false);
            return
        }

        if (quantity === "0") {
            setControlButton(true);
            setShowProcessing(false);
            errorMessage("This food is not available")
            return
        }

        axios.put(`https://colibri-restaurant-server.vercel.app/countOrder/${_id}`, data)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    axios.post("https://colibri-restaurant-server.vercel.app/foodOrder", orderedInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                axios.put(`https://colibri-restaurant-server.vercel.app/countQuantity/${_id}`, quantityData)
                                    .then(res => {
                                        if (res.data.modifiedCount > 0) {
                                            setControl(!control);
                                            setShowProcessing(false);
                                            navigate("/");
                                            sweetMessage("Successfully Purchase")
                                        }
                                    })
                            }
                        })
                }
            })

    }

    return (
        <div>
            <Helmet>
                <title>Colibri | Purchase</title>
            </Helmet>
            <div className="md:w-5/6 lg:w-4/6 mx-auto mt-10 md:mt-16">
                <h1 className="font-semibold text-center py-8 md:pb-16 text-4xl">Purchase Info</h1>

                <div className="grid md:grid-cols-2 gap-5 p-4">

                    <div className="col-span-1 flex gap-5 items-center">
                        <div>
                            <img className="h-36 w-48 rounded-lg" src={image} alt="" />
                        </div>
                        <div>
                            <h3 className="text-xl"><span className="font-bold">Food: </span>{foodName}</h3>
                            <h3 className="text-lg"><span className="font-bold">Category: </span>{foodCategory}</h3>
                            <h3 className="text-lg"><span className="font-bold">Price: </span>${price}</h3>
                            <h3 className="text-lg"><span className="font-bold">Quantity: </span>{quantity}</h3>
                        </div>
                    </div>

                    <hr className="md:hidden border-primary_color mt-3" />

                    <div className="col-span-1">
                        <h1 className="text-2xl font-medium text-center">Ordered Info</h1>
                        <div className="mt-5">
                            <h3 className="text-lg"><span className="font-bold">Name: </span>{name}</h3>
                            <h3 className="text-lg"><span className="font-bold">Email: </span>{email}</h3>
                            <h3 className="text-lg"><span className="font-bold">Date: </span>{myDate}</h3>
                            <h3 className="text-lg"><span className="font-bold">Time: </span>{time}</h3>
                        </div>
                        <button onClick={handlePurchase} disabled={controlButton} className={`${controlButton ? "opacity-40" : ""} bg-primary_btn_color my-5 h-10 w-full rounded-lg text-lg font-medium text-white hover:bg-primary_color duration-300`}>Purchase</button>
                    </div>
                </div>

            </div>
            {showProcessing ? <Processing></Processing> : undefined}


        </div>
    );
};

export default Purchase;