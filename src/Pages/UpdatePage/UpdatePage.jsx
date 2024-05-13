import axios from "axios";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const UpdatePage = () => {

    const { user, sweetMessage, setControl, control } = useContext(AuthContext);
    const updateDatd = useLoaderData();
    const { _id, foodName, price, image, madeBy, foodCategory, description, foodOrigin, quantity } = updateDatd;
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const madeBy = form.madeBy.value;
        const foodCategory = form.foodCategory.value;
        const description = form.description.value;
        const foodOrigin = form.foodOrigin.value;
        const quantity = form.quantity.value;
        const foodData = { image, foodName, price, madeBy, foodCategory, description, foodOrigin, quantity };

        axios.put(`https://colibri-restaurant-server.vercel.app/food/${_id}`, foodData)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    form.reset();
                    navigate(`/myAddedFood/${user.email}`);
                    sweetMessage("Successfully Updated");
                    setControl(!control);
                }
            })
    }

    return (
        <div>
            <h1 className="font-semibold text-center py-16 text-4xl">Update Food Item</h1>

            <form onSubmit={handleUpdate} className="flex flex-col gap-5 bg-primary_bg_color mx-3  p-10 md:w-4/6 md:mx-auto md:px-28 md:py-20 lg:px-44 rounded-2xl">
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Image</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="image" defaultValue={image} required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Price</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="price" defaultValue={price} required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Food Name</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="foodName" defaultValue={foodName} required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Quantity</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="number" name="quantity" defaultValue={quantity} required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Made By</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="madeBy" defaultValue={madeBy} required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Food Category</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="foodCategory" defaultValue={foodCategory} required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Food Origin</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="foodOrigin" defaultValue={foodOrigin} required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Description</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="description" defaultValue={description} required />
                    </div>
                </div>
                <button className="bg-primary_btn_color h-10 rounded-lg text-lg font-medium text-white hover:bg-primary_color duration-300">Update</button>
            </form>

        </div>
    );
};

export default UpdatePage;