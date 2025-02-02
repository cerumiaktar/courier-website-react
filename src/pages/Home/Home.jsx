import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Chooses from "../Chooses/Chooses";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Chooses></Chooses>
            <Brands></Brands>
        </div>
    );
};

export default Home;