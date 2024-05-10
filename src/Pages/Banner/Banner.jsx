import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Banner = () => {

    return (
        <div>
            <AwesomeSlider className='h-96'>
                <div className='bg-white w-full h-full'>1</div>
                <div className='bg-white w-full h-full'>2</div>
                <div className='bg-white w-full h-full'>3</div>
            </AwesomeSlider>
        </div>
    );
};

export default Banner;