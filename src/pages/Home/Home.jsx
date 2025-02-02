import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Chooses from "../Chooses/Chooses";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Chooses></Chooses>
        </div>
    );
};

export default Home;