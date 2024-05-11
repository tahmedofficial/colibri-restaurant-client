import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";


const AddFood = () => {

    const { user, sweetMessage, setControl, control } = useContext(AuthContext);

    const handleAddFood = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email;
        const totalOrders = "0";
        const image = form.image.value;
        const foodName = form.foodName.value;
        const price = form.price.value;
        const madeBy = form.madeBy.value;
        const foodCategory = form.foodCategory.value;
        const description = form.description.value;
        const foodOrigin = form.foodOrigin.value;
        const quantity = form.quantity.value;
        const foodData = { email, totalOrders, image, foodName, price, madeBy, foodCategory, description, foodOrigin, quantity };
        console.log(foodData);

        axios.post("http://localhost:5000/food", foodData)
            .then(res => {
                if (res.data.insertedId) {
                    console.log(res.data);
                    form.reset()
                    sweetMessage("Added Successfully")
                    setControl(!control);
                }
            })
    }

    return (
        <div>
            <h1 className="font-semibold text-center py-16 text-4xl">Add Food Item</h1>

            <form onSubmit={handleAddFood} className="flex flex-col gap-5 bg-primary_bg_color mx-3  p-10 md:w-4/6 md:mx-auto md:px-28 md:py-20 lg:px-44 rounded-2xl">
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Image</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="image" placeholder="Enter image url" required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Price</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="price" placeholder="Enter food price" required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Food Name</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="foodName" placeholder="Enter food name" required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Quantity</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="number" name="quantity" placeholder="Enter available quantity" required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Made By</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="madeBy" placeholder="Enter chef name" required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Food Category</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="foodCategory" placeholder="Enter food category" required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Food Origin</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="foodOrigin" placeholder="Enter food origin" required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Description</h3>
                        <input className="h-10 w-full border-0 pl-3 rounded-lg" type="text" name="description" placeholder="Enter description" required />
                    </div>
                </div>
                <button className="bg-primary_btn_color mt-4 h-10 rounded-lg text-lg font-medium text-white hover:bg-primary_color duration-300">Add</button>
            </form>

        </div>
    );
};

export default AddFood;