import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/m5G21Jp/fernando-alvarez-rodriguez-M7-Gdd-Pq-Jowg-unsplash.jpg')] rounded-xl mt-8 h-[500px] bg-no-repeat bg-cover bg-center">
            <h1 className="text-white text-center pt-10 text-5xl font-bold italic">Luxuries Hotel</h1>
            <h2 className="text-white text-center pt-10 text-3xl font-bold ">Special Offer</h2>
            <p className="text-white text-center pt-10 text-2xl font-bold ">Get 30% off on pre-booking</p>
           
            <Marquee>
            <p className="text-white  text-center pt-10 text-3xl font-bold mr-16">Click on the Book Now button</p>
            <p className="text-white text-center pt-10 text-3xl font-bold mr-16">Click on the Book Now button</p>
            <p className="text-white  text-center pt-10 text-3xl font-bold mr-16">Click on the Book Now button</p>
            </Marquee>
            <div className="text-center mt-8">
                <button className="btn font-bold">Book Now</button>
            </div>
        </div>
    );
};

export default Banner;