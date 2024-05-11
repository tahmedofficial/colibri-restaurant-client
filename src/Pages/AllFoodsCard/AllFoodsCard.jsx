import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const AllFoodsCard = ({ food }) => {

    const { _id, foodName, image, price, foodCategory } = food;
    // console.log(food);
    return (
        <div className="shadow-md border-t m-5 md:m-0 p-5 rounded-xl">
            <img className="rounded-xl md:h-44 lg:h-60" src={image} alt="" />
            <div className="my-8 text-lg">
                <h1><span className="font-bold">Food Name:</span> {foodName}</h1>
                <h3><span className="font-bold">Category:</span> {foodCategory}</h3>
                <h3> <span className="font-bold">Price:</span> {price}</h3>
            </div>
            <Link to={`/singleFood/${_id}`}>
                <button className="bg-primary_btn_color text-white px-5 h-10 rounded-lg hover:bg-primary_color duration-300">View Details</button>
            </Link>
        </div>
    );
};

export default AllFoodsCard;

AllFoodsCard.propTypes = {
    food: PropTypes.object.isRequired
}