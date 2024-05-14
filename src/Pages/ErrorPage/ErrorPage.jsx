import { Link } from "react-router-dom";
import erroeImg from "../../assets/images/404.jpg";


const ErrorPage = () => {
    return (
        <div>
            <div className="mt-28">
                <img className="mx-auto" src={erroeImg} alt="" />
            </div>
            <div className="text-center">
                <Link to="/">
                    <button className="bg-primary_text_color text-xl px-16 font-medium text-white rounded-full py-3 hover:bg-primary_color duration-300">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;