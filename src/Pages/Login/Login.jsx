import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import { FaGoogle } from "react-icons/fa6";


const Login = () => {

    const { loginUser, loginWithGoogle, sweetMessage, errorMessage } = useContext(AuthContext);
    const location = useLocation();
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
                navigate(location?.state ? location?.state : "/")
            })
            .catch(error => {
                errorMessage("Invalid email or password")
                console.log(error);
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(() => {
                sweetMessage("Logged in successfully")
                navigate(location?.state ? location.state : "/")
            }
            )
            .catch(error => {
                if (error.code === "auth/account-exists-with-different-credential") {
                    errorMessage("Email address already exists")
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title>Colibri | Login</title>
            </Helmet>
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
                <button className="bg-primary_btn_color h-10 rounded-lg text-white text-lg hover:bg-primary_color duration-300">Login</button>
                <div className="flex items-center font-medium mx-auto">
                    <h3>Do not have account?</h3>
                    <Link to="/register">
                        <h3 className="text-indigo-700 font-semibold ml-2">Register</h3>
                    </Link>
                </div>
            </form>
            <div className="flex justify-center mt-10">
                <button onClick={handleGoogleLogin} className="text-lg bg-primary_btn_color text-white py-2 px-10 rounded-lg flex gap-2 items-center hover:bg-primary_color duration-300"><span><FaGoogle className="text-2xl" /></span>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;