import { Link, useLoaderData } from "react-router-dom";

const SingleFood = () => {

    const singleFood = useLoaderData();
    const { _id, foodName, price, image, description, foodCategory, madeBy, foodOrigin } = singleFood;

    return (
        <div className="md:w-4/6 mx-auto grid gap-5 md:grid-cols-2 p-5 md:p-0 mt-16">
            <div>
                <img className="rounded-xl" src={image} alt="" />
            </div>
            <div className="md:mt-5 flex flex-col gap-3">
                <h1 className="shadow-inner text-3xl font-medium rounded-lg p-2"><span className="font-bold">Name:</span> {foodName}</h1>
                <div className="flex gap-10 shadow-inner rounded-lg p-2 text-lg">
                    <h3><span className="font-bold">Category:</span> {foodCategory}</h3>
                    <h3><span className="font-bold">Food Origin:</span> {foodOrigin}</h3>
                </div>
                <div className="flex gap-10 shadow-inner text-lg rounded-lg p-2">
                    <h3><span className="font-bold">Price:</span> {price}</h3>
                    <h3><span className="font-bold">Made By:</span> {madeBy}</h3>
                </div>
                <h3 className="shadow-inner rounded-lg p-2"><span className="font-bold">Description:</span> {description}</h3>
                <Link to={`/purchase/${_id}`}>
                    <button className="bg-primary_btn_color font-medium mt-4 text-white px-5 h-10 rounded-lg hover:bg-primary_color duration-300">Purchase</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleFood;