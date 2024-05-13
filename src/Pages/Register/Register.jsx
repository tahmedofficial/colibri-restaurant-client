import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {

    const { registerUser, setUser, errorMessage, sweetMessage } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        // validation
        if (password.length < 6) {
            errorMessage("Password must be 6 characters")
            return
        }

        registerUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        setUser({
                            displayName: name,
                            photoURL: photo,
                        })
                    })
                    .catch()
                sweetMessage("Successfully Registered")
                navigate("/")
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Colibri | Register</title>
            </Helmet>
            <h1 className="font-semibold text-center text-black py-20 text-4xl">Register Now</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-5 bg-primary_bg_color mx-3  p-10 md:w-4/6 md:mx-auto md:px-28 md:py-20 lg:px-44 rounded-2xl">
                <div>
                    <h3 className="mb-2 font-medium text-black">Name</h3>
                    <input className="h-10 w-full border-0 outline-none pl-3 rounded-lg" type="text" name="name" placeholder="Enter Your Name" required />
                </div>
                <div>
                    <h3 className="mb-2 font-medium text-black">Email</h3>
                    <input className="h-10 w-full border-0 outline-none pl-3 rounded-lg" type="email" name="email" placeholder="Enter Your Email" required />
                </div>
                <div>
                    <h3 className="mb-2 font-medium text-black">Photo</h3>
                    <input className="h-10 w-full border-0 outline-none pl-3 rounded-lg" type="text" name="photo" placeholder="Enter Your Photo Url" required />
                </div>
                <div>
                    <h3 className="mb-2 font-medium text-black">Password</h3>
                    <input className="h-10 w-full border-0 outline-none pl-3 rounded-lg" type="password" name="password" placeholder="Enter Your Password" required />
                </div>
                <button className="bg-primary_btn_color h-10 rounded-lg text-white text-lg hover:bg-primary_color duration-300">Register</button>
                <div className="flex items-center font-medium mx-auto">
                    <h3>Already Register</h3>
                    <Link to="/login">
                        <h3 className="text-indigo-700 font-semibold ml-2">Login</h3>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;