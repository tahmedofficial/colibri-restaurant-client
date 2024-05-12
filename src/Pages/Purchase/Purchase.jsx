import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Purchase = () => {

    const singleFood = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, foodName, price, image, quantity, foodCategory, totalOrders } = singleFood;
    const date = new Date()
    const dateStr = date.toLocaleString()
    const myDate = dateStr.split(",");

    return (
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
                        <h3 className="text-lg"><span className="font-bold">Name: </span>{user?.displayName}</h3>
                        <h3 className="text-lg"><span className="font-bold">Email: </span>{user?.email}</h3>
                        <h3 className="text-lg"><span className="font-bold">Date: </span>{myDate[0]}</h3>
                        <h3 className="text-lg"><span className="font-bold">Time: </span>{myDate[1]}</h3>
                    </div>
                    <button className="bg-primary_btn_color my-5 h-10 w-full rounded-lg text-lg font-medium text-white hover:bg-primary_color duration-300">Purchase</button>
                </div>

            </div>
        </div>
    );
};

export default Purchase;