import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TopFoods from "../TopFoods/TopFoods";
import OurChef from "../OurChef/OurChef";
import About from "../About/About";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Colibri | Home</title>
            </Helmet>
            <Banner></Banner>
            <TopFoods></TopFoods>
            <About></About>
            <OurChef></OurChef>
        </div>
    );
};

export default Home;