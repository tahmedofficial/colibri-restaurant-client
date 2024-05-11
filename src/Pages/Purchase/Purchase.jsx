import { useLoaderData } from "react-router-dom";

const Purchase = () => {

    const singleFood = useLoaderData();
    // const { _id, foodName, price, image, description, foodCategory, madeBy, foodOrigin } = singleFood;
    console.log(singleFood);

    return (
        <div>
            Purchase pag
        </div>
    );
};

export default Purchase;