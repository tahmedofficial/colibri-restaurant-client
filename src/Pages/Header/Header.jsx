import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Header = () => {

    const { user, logoutUser, sweetMessage } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                sweetMessage("Successfully Logout")
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="bg-primary_bg_color">
            <div className="md:w-5/6 mx-auto bg-primary_bg_color">
                <Navbar fluid rounded className="bg-primary_bg_color">
                    <Navbar.Toggle className="text-black" />
                    <h1 className="text-3xl font-bold text-orange-800"><span className="text-primary_btn_color">Col</span>ibri</h1>
                    <div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar className="border-2 rounded-full border-primary_color" alt="User settings" img={user?.photoURL} rounded />
                            }
                        >
                            <Dropdown.Item>My added food items</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Add a food item</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>My ordered food items</Dropdown.Item>
                        </Dropdown>
                        {
                            user ? <button onClick={handleLogout} className="bg-primary_btn_color text-white px-5 h-10 rounded-lg ml-3 hover:bg-primary_color duration-300">Logout</button> :
                                <Link to="/login">
                                    <button className="bg-primary_btn_color text-white px-5 h-10 rounded-lg ml-3 hover:bg-primary_color duration-300">Login</button>
                                </Link>
                        }
                    </div>
                    <Navbar.Collapse className="md:ml-auto mr-16">
                        <div className="flex flex-col md:flex-row md:items-center gap-2">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-black border border-primary_btn_color px-5 py-1 rounded-lg md:text-lg font-normal hover:bg-primary_btn_color hover:text-white duration-300" : "md:text-lg font-normal hover:bg-primary_btn_color hover:text-white duration-300 px-5 py-1 rounded-lg"}>Home</NavLink>
                            <NavLink to="/allFoods" className={({ isActive }) => isActive ? "text-black border border-primary_btn_color px-5 py-1 rounded-lg md:text-lg font-normal hover:bg-primary_btn_color hover:text-white duration-300" : "md:text-lg font-normal hover:bg-primary_btn_color hover:text-white duration-300 px-5 py-1 rounded-lg"}>All Foods</NavLink>
                            <NavLink to="/gallery" className={({ isActive }) => isActive ? "text-black border border-primary_btn_color px-5 py-1 rounded-lg md:text-lg font-normal hover:bg-primary_btn_color hover:text-white duration-300" : "md:text-lg font-normal hover:bg-primary_btn_color hover:text-white duration-300 px-5 py-1 rounded-lg"}>Gallery</NavLink>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;