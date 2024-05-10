import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Login = () => {

    const { loginUser, sweetMessage } = useContext(AuthContext);
    const locattion = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(res => {
                console.log(res.user);
                sweetMessage("Successfully Login")
                navigate(locattion?.state ? locattion?.state : "/")
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div>
            <h1 className="font-semibold text-center text-black py-20 text-4xl">Login Now</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-5 bg-primary_bg_color mx-3  p-10 md:w-4/6 md:mx-auto md:px-28 md:py-20 lg:px-44 rounded-2xl">
                <div>
                    <h3 className="mb-2 font-medium text-black">Email</h3>
                    <input className="h-10 w-full border-0 outline-none pl-3 rounded-lg" type="email" name="email" placeholder="Enter Your Email" required />
                </div>
                <div>
                    <h3 className="mb-2 font-medium text-black">Password</h3>
                    <input className="h-10 w-full border-0 outline-none pl-3 rounded-lg" type="password" name="password" placeholder="Enter Your Password" required />
                </div>
                <button className="bg-primary_btn_color h-10 rounded-lg text-white text-lg">Login</button>
                <div className="flex items-center font-medium mx-auto">
                    <h3>Do not have account?</h3>
                    <Link to="/register">
                        <h3 className="text-indigo-700 font-semibold ml-2">Register</h3>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;