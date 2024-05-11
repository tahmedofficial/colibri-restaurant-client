import { FaArrowRightLong, FaFacebookF, FaInstagram, FaLinkedin, FaLocationDot, FaPhone, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className="bg-primary_color py-24 mt-24">
            <div className="lg:grid lg:grid-cols-3 px-8">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-28 md:w-5/6 mx-auto col-span-2">
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-2xl text-white">Services</h1>
                        <h3 className="text-white">Home Delevery</h3>
                        <h3 className="text-white">Booking</h3>
                        <h3 className="text-white">Airbnb</h3>
                        <h3 className="text-white">Hotwire</h3>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="font-semibold text-2xl text-white">Company</h1>
                        <h3 className="text-white">About us</h3>
                        <h3 className="text-white">Orbitz</h3>
                        <h3 className="text-white">Jobs</h3>
                        <h3 className="text-white">Priceline</h3>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-2xl text-white">Address</h1>
                        <h3 className="text-white flex items-center gap-2">
                            <FaLocationDot />
                            <span>123 Main Street, New York, NY 10001, USA</span>
                        </h3>
                        <h3 className="text-white flex items-center gap-2">
                            <FaPhone />
                            <span>+990 3647685623</span>
                        </h3>
                        <h3 className="text-white flex items-center gap-2">
                            <MdEmail />
                            <span>colibri@gmail.com</span>
                        </h3>
                    </div>
                </div>
                <div className="w-full col-span-1 mt-10 lg:mt-0">
                    <h1 className="font-semibold text-2xl text-white">Newsletter</h1>
                    <div className="w-full flex mt-3">
                        <input className="outline-none border-0 px-2 bg-white w-full lg:w-96" type="text" placeholder="username@site.com" />
                        <button className="bg-primary_btn_color hover:bg-primary_color duration-300 text-white text-lg px-5">
                            <FaArrowRightLong />
                        </button>
                    </div>
                    <h1 className="text-2xl font-semibold text-white mt-5">Follow us on</h1>
                    <div className="flex gap-4 text-xl text-white mt-4">
                        <div className="border border-white hover:bg-primary_btn_color hover:border-primary_btn_color duration-300 rounded-full p-2">
                            <FaFacebookF />
                        </div>
                        <div className="border border-white hover:bg-primary_btn_color hover:border-primary_btn_color duration-300 rounded-full p-2">
                            <FaTwitter />
                        </div>
                        <div className="border border-white hover:bg-primary_btn_color hover:border-primary_btn_color duration-300 rounded-full p-2">
                            <FaInstagram />
                        </div>
                        <div className="border border-white hover:bg-primary_btn_color hover:border-primary_btn_color duration-300 rounded-full p-2">
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-white mt-16">
                <h3 className="text-white text-center text-lg mt-8">Copyright © 2024 - All right reserved by Colibri Company Ltd</h3>
            </div>
        </div>
    );
};

export default Footer;