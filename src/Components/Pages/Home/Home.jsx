
import Banner from "./Banner/Banner";
import FeaturedRoom from "./Banner/FeaturedRoom";
import NewsLetter from "./Banner/NewsLetter";
import Parallax from "./Banner/Parallax";
import {Helmet} from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://localhost:5173/" />
            </Helmet>
            <Parallax></Parallax>
            <Banner></Banner>
            <NewsLetter></NewsLetter>
            <FeaturedRoom></FeaturedRoom>
        </div>
    );
};

export default Home;