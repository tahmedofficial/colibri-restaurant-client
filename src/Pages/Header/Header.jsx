import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Header = () => {

    const { user } = useContext(AuthContext);

    const handleLogout = () => {

    }

    return (
        <div className="bg-primary_btn_color">
            <div className="md:w-5/6 mx-auto bg-primary_btn_color">
                <Navbar fluid rounded className="bg-primary_btn_color">
                    <Navbar.Toggle className="text-black" />
                    <h1 className="text-2xl font-semibold">Colibri</h1>
                    <div className="flex md:order-2">
                        <Avatar alt="User settings" img={user?.photoURL} rounded />
                        {
                            user ? <button onClick={handleLogout} className="bg-stone-500 text-white px-5 h-10 rounded-lg ml-3">Logout</button> :
                                <Link to="/login">
                                    <button className="bg-stone-500 text-white px-5 h-10 rounded-lg ml-3">Login</button>
                                </Link>
                        }
                        <Dropdown arrowIcon={false} inline></Dropdown>
                    </div>
                    <Navbar.Collapse className="md:ml-auto mr-16">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-black bg-gray-100 px-5 py-1 rounded-lg md:text-lg font-normal" : "md:text-lg font-normal"}>Home</NavLink>
                            <NavLink to="/allFoods" className={({ isActive }) => isActive ? "text-black bg-gray-100 px-5 py-1 rounded-lg md:text-lg font-normal" : "md:text-lg font-normal"}>All Foods</NavLink>
                            <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-black bg-gray-100 px-5 py-1 rounded-lg md:text-lg font-normal" : "md:text-lg font-normal"}>Gallery</NavLink>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;