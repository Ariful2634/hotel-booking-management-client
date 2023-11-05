import Banner from "./Banner/Banner";
import FeaturedRoom from "./Banner/FeaturedRoom";
import NewsLetter from "./Banner/NewsLetter";
import Parallax from "./Banner/Parallax";


const Home = () => {
    return (
        <div>
            
            <Parallax></Parallax>
            <Banner></Banner>
            <NewsLetter></NewsLetter>
            <FeaturedRoom></FeaturedRoom>
        </div>
    );
};

export default Home;