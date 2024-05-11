import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import AllFoodsCard from "../AllFoodsCard/AllFoodsCard";
import titleImg from "../../assets/images/titleBg.jpg";
import { FaArrowRightLong } from "react-icons/fa6";


const AllFoods = () => {

    const { foods } = useContext(AuthContext);

    const handleSearch = (event) => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        console.log(search);
    }

    return (
        <div>
            <div className="relative flex justify-center items-center">
                <div className="bg-primary_bg_color w-full">
                    <img className="w-full md:h-48 lg:h-80 pt-10 mix-blend-multiply" src={titleImg} alt="" />
                </div>
                <div className="absolute text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium">All Foods Card</h1>
                    <h3 className="text-center md:text-lg mt-2"><span className="text-yellow-400">All Foods</span> | All Foods Card</h3>
                </div>
            </div>

            <div className="md:w-5/6 mx-auto mt-20">

                <div className="flex justify-center mb-10">
                    <form onSubmit={handleSearch} className="flex">
                        <input className="border-0 text-white placeholder-white bg-primary_color rounded-l-lg w-full lg:w-96" type="text" name="search" placeholder="Search hear" />
                        <button className="bg-primary_btn_color rounded-r-lg hover:bg-primary_color duration-300 text-white text-lg px-5">
                            <FaArrowRightLong />
                        </button>
                    </form>
                </div>

                <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                    {
                        foods.map(food => <AllFoodsCard key={food._id} food={food}></AllFoodsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoods;