import { BiSupport } from "react-icons/bi";
import { MdOutlineVerifiedUser, MdRecommend, MdTour } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { SiVorondesign } from "react-icons/si";

const About = () => {
    return (
        <div className="md:w-5/6 mx-auto">
            <h1 className="font-semibold text-center pt-32 text-primary_btn_color pb-8 text-4xl lg:text-5xl">About Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-primary_bg_color p-8 m-3 rounded-xl">
                    <div className="flex items-center justify-center rounded-full text-5xl h-20 w-20 bg-primary_btn_color text-white">
                        <MdTour />
                    </div>
                    <h1 className="text-2xl font-semibold text-primary_text_color mt-6 mb-3">Extensive Destination Coverage</h1>
                    <h3>Offer a wide range of destinations, from popular tourist spots to off-the-beaten-path locations. Highlight the diversity of destinations your website covers, ensuring that users can find options that suit their interests and preferences.</h3>
                </div>
                <div className="bg-primary_bg_color p-8 m-3 rounded-xl">
                    <div className="flex items-center justify-center rounded-full text-5xl h-20 w-20 bg-primary_btn_color text-white">
                        <RiDiscountPercentFill />
                    </div>
                    <h1 className="text-2xl font-semibold text-primary_text_color mt-6 mb-3">Competitive Prices and Deals</h1>
                    <h3>Promote competitive prices and exclusive deals on flights, hotels, vacation packages, and activities. Highlight special discounts, last-minute offers, and bundled packages to attract budget-conscious travelers and those seeking value for money.</h3>
                </div>
                <div className="bg-primary_bg_color p-8 m-3 rounded-xl">
                    <div className="flex items-center justify-center rounded-full text-5xl h-20 w-20 bg-primary_btn_color text-white">
                        <SiVorondesign />
                    </div>
                    <h1 className="text-2xl font-semibold text-primary_text_color mt-6 mb-3">User-Friendly Interface</h1>
                    <h3>Provide a seamless and intuitive user experience with a user-friendly interface. Make it easy for users to search, compare, and book flights, accommodations, and activities. A simple navigation system and clear call-to-action buttons can enhance user satisfaction.</h3>
                </div>
                <div className="bg-primary_bg_color p-8 m-3 rounded-xl">
                    <div className="flex items-center justify-center rounded-full text-5xl h-20 w-20 bg-primary_btn_color text-white">
                        <MdRecommend />
                    </div>
                    <h1 className="text-2xl font-semibold text-primary_text_color mt-6 mb-3">Personalized Recommendations</h1>
                    <h3> Implement a recommendation engine or personalized suggestions based on user preferences, search history, and past bookings. By offering tailored recommendations, you can enhance user engagement and satisfaction, helping travelers discover new destinations and experiences.</h3>
                </div>
                <div className="bg-primary_bg_color p-8 m-3 rounded-xl">
                    <div className="flex items-center justify-center rounded-full text-5xl h-20 w-20 bg-primary_btn_color text-white">
                        <BiSupport />
                    </div>
                    <h1 className="text-2xl font-semibold text-primary_text_color mt-6 mb-3">Reliable Customer Support</h1>
                    <h3> Ensure reliable customer support through multiple channels, such as live chat, email, and phone support. Provide prompt assistance for booking inquiries, itinerary changes, and travel assistance, demonstrating your commitment to customer satisfaction and support throughout their journey.</h3>
                </div>
                <div className="bg-primary_bg_color p-8 m-3 rounded-xl">
                    <div className="flex items-center justify-center rounded-full text-5xl h-20 w-20 bg-primary_btn_color text-white">
                        <MdOutlineVerifiedUser />
                    </div>
                    <h1 className="text-2xl font-semibold text-primary_text_color mt-6 mb-3">Trust and Security</h1>
                    <h3>Emphasize trust and security by showcasing relevant certifications, partnerships with reputable travel providers, and secure payment gateways. Assure users that their personal information is protected and that they can book with confidence, fostering trust and loyalty among your audience.</h3>
                </div>
            </div>
        </div>
    );
};

export default About;