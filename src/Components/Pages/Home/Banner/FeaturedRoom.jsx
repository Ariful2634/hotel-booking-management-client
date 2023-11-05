import room from '../Banner../../../Home../../../Pages../../../assets/romantic-bedroom-min.jpg'
import room1 from '../Banner../../../Home../../../Pages../../../assets/2150683419.jpg'
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';


const FeaturedRoom = () => {
    return (
        <div data-aos="flip-left">
            <h2 className='font-bold text-blue-600 text-center text-3xl mt-16 mb-8'>Our Featured Rooms</h2>
            <div className='flex flex-col lg:flex-row gap-16'>
            <div className="card card-compact lg:w-[550px] bg-base-100 shadow-xl">
                <figure><img src={room} alt="Shoes" /></figure>
                <div className="card-body">
                    
                    <p className="font-bold text-lg">A luxurious and romantic room with a king-sized canopy bed, a jacuzzi, a chandelier, and a balcony with a view of the sea. The room has a private bathroom with a steam shower and a vanity, and a minibar with a champagne bottle and glasses. The room also has free Wi-Fi, a satellite TV, and a stereo.</p>
                   
                </div>
                <div className='text-center mb-4'>
                   <Link to='/rooms'> <button className='btn btn-warning font-bold'>Book Now</button></Link>
                </div>
            </div>
            <div className="card card-compact lg:w-[550px] bg-base-100 shadow-xl">
                <figure><img src={room1} alt="Shoes" /></figure>
                <div className="card-body">
                    
                    <p className="font-bold text-lg">A bright and colorful room with two single beds, a bunk bed, a dresser, and a wall mural with a cartoon theme. The room has a private bathroom with a shower and a sink, and a play area with a toy box and a board game. The room also has free Wi-Fi, a TV with a DVD player, and a heater.</p>
                   
                </div>
                <div className='text-center mb-4'>
                   <Link to='/rooms'> <button className='btn btn-warning font-bold'>Book Now</button></Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FeaturedRoom;