import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Chooses from "../Chooses/Chooses";
import FAQ from "../FAQ/FAQ.JSX";
import Services from "../Services/Services";
import ShortBanner from "../ShortBanner/ShortBanner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Chooses></Chooses>
            <Brands></Brands>
            <ShortBanner></ShortBanner>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;