import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import TopFoods from "../TopFoods/TopFoods";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Colibri | Home</title>
            </Helmet>
            <Banner></Banner>
            <TopFoods></TopFoods>
        </div>
    );
};

export default Home;