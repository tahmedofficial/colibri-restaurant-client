import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";

const TopFoods = () => {

    const { foods, control } = useContext(AuthContext);
    const [sortedFoods, setSortedFoods] = useState(foods);

    useEffect(() => {
        const copyFoods = [...foods];
        copyFoods.sort((order1, order2) => order2.totalOrders - order1.totalOrders);
        setSortedFoods(copyFoods);
    }, [foods, control])

    return (
        <div className="md:w-5/6 mx-auto mt-20">
            <h1 className="font-semibold text-primary_btn_color text-center py-10 text-4xl lg:text-5xl">Top Foods section</h1>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                {
                    sortedFoods.slice(0, 6).map(food => <div key={food._id}>
                        <div className="shadow-md border-t m-5 md:m-0 p-5 rounded-xl">
                            <div className="relative">
                                <div>
                                    <img className="rounded-xl w-full md:h-44 lg:h-60" src={food.image} alt="" />
                                </div>
                                <div className="absolute top-2 left-2">
                                    <h3 className="text-lg bg-red-500 text-white px-3 rounded-full text-center py-1">Top Sell: {food.totalOrders}</h3>
                                </div>
                            </div>
                            <div className="my-8 text-lg">
                                <h1><span className="font-bold">Food Name:</span> {food.foodName}</h1>
                                <h3><span className="font-bold">Category:</span> {food.foodCategory}</h3>
                                <h3> <span className="font-bold">Price:</span> ${food.price}</h3>
                            </div>
                            <Link to={`/singleFood/${food._id}`}>
                                <button className="bg-primary_btn_color text-white px-5 h-10 rounded-lg hover:bg-primary_color duration-300">View Details</button>
                            </Link>
                        </div>
                    </div>)
                }
            </div>

            <div className="text-center mt-8 md:mt-16">
                <Link to="/allFoods">
                    <button className="bg-primary_btn_color text-white text-xl px-10 h-12 rounded-lg hover:bg-primary_color duration-300">See all</button>
                </Link>
            </div>
        </div>
    );
};

export default TopFoods;