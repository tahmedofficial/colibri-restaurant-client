import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import slider1 from "../../assets/images/banner1.jpg";
import slider2 from "../../assets/images/banner2.jpg";
import slider3 from "../../assets/images/banner3.jpg";
import { Link } from 'react-router-dom';


const Banner = () => {

    return (
        <div>
            <AwesomeSlider className='h-[830px] md:h-[660px] md:pt-10 bg-primary_bg_color'>
                {/* slider 1 */}
                <div className='bg-white w-full h-full'>
                    <div className='grid md:grid-cols-2 md:gap-8 bg-primary_bg_color p-5'>
                        <div className='col-span-1 flex flex-col justify-center mb-8 p-8 md:mb-0'>
                            <h1 className='text-5xl font-medium'>It is not just food, It is an Experience</h1>
                            <h3 className='my-5'>Wagyu beef boasts intense marbling thin streaks of fat dispersed evenly throughout the meat. This translates to a more tender, flavourful cut of meat that can actually be cooked longer without getting too tough or dried out.</h3>
                            <Link to="/allFoods">
                                <button className='h-10 md:mt-20 bg-primary_btn_color text-white w-52 hover:bg-primary_color duration-300'>See All Foods</button>
                            </Link>
                        </div>
                        <div className='col-span-1'>
                            <img className='md:h-96 lg:h-[580px] w-full rounded-xl' src={slider1} alt="" />
                        </div>
                    </div>
                </div>
                {/* slider 2 */}
                <div className='bg-white w-full h-full'>
                    <div className='grid md:grid-cols-2 md:gap-8 bg-primary_bg_color p-5'>
                        <div className='col-span-1 flex flex-col justify-center mb-8 p-8 md:mb-0'>
                            <h1 className='text-5xl font-medium'>Rib steak or ribeye is a cut of beef from the rib section</h1>
                            <h3 className='my-5'>The rib steak or ribeye is a cut of beef from the rib section, one of the nine primal cuts, and is prized for its tenderness and flavor. The ribeye is a boneless cut taken from the rib section of beef cattle while the rib steak is a bone-in ribeye.</h3>
                            <Link to="/allFoods">
                                <button className='h-10 md:mt-16 bg-primary_btn_color text-white w-52 hover:bg-primary_color duration-300'>See All Foods</button>
                            </Link>
                        </div>
                        <div className='col-span-1'>
                            <img className='md:h-96 lg:h-[580px] w-full rounded-xl' src={slider2} alt="" />
                        </div>
                    </div>
                </div>
                {/* slider 3 */}
                <div className='bg-white w-full h-full'>
                    <div className='grid md:grid-cols-2 md:gap-8 bg-primary_bg_color p-5'>
                        <div className='col-span-1 flex flex-col justify-center mb-8 p-8 md:mb-0'>
                            <h1 className='text-5xl font-medium'>T-bone and porterhouse are steaks short loin.</h1>
                            <h3 className='my-5'>The T-bone and porterhouse are steaks of beef cut from the short loin. Both steaks include a T-shaped lumbar vertebra with sections of abdominal internal oblique muscle on each side. Porterhouse steaks are cut from the rear end of the short loin and thus include more tenderloin steak, along with a large strip steak.</h3>
                            <Link to="/allFoods">
                                <button className='h-10 md:mt-16 bg-primary_btn_color text-white w-52 hover:bg-primary_color duration-300'>See All Foods</button>
                            </Link>
                        </div>
                        <div className='col-span-1'>
                            <img className='md:h-96 lg:h-[580px] w-full rounded-xl' src={slider3} alt="" />
                        </div>
                    </div>
                </div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;