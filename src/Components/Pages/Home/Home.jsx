import Banner from "./Banner/Banner";
import FeaturedRoom from "./Banner/FeaturedRoom";
import Parallax from "./Banner/Parallax";


const Home = () => {
    return (
        <div>
            
            <Parallax></Parallax>
            <Banner></Banner>
            <FeaturedRoom></FeaturedRoom>
        </div>
    );
};

export default Home;