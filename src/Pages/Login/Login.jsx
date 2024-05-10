import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1 className="font-semibold text-center text-black py-20 text-4xl">Login Now</h1>
            <form className="flex flex-col gap-5 bg-primary_btn_color mx-3  p-10 md:w-4/6 md:mx-auto md:px-28 md:py-20 lg:px-44 rounded-2xl">
                <div>
                    <h3 className="mb-2 font-medium text-black">Email</h3>
                    <input className="h-10 w-full border-0 outline-none pl-3 rounded-lg" type="email" name="email" placeholder="Enter Your Email" required />
                </div>
                <div>
                    <h3 className="mb-2 font-medium text-black">Password</h3>
                    <input className="h-10 w-full border-0 outline-none pl-3 rounded-lg" type="password" name="password" placeholder="Enter Your Password" required />
                </div>
                <button className="bg-stone-500 h-10 rounded-lg text-white text-lg">Login</button>
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