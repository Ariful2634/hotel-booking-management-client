import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

const RoomDetails = () => {

    const rooms = useLoaderData()
    const { id } = useParams()
    console.log(rooms, id)

    const room = rooms.find(room => room._id == id)
    const {_id}=room

    return (
        <div className="flex justify-center">
            
            <div className="card w-96 md:w-[550px] lg:w-[550px] bg-base-100 shadow-xl text-center">
                <figure><img src={room.room_image} alt="Shoes" /></figure>
                <div className="card-body">
                    
                    <p className="font-semibold">{room.room_description}</p>
                    <div className="flex items-center gap-20 mt-4">
                    <h2 className="card-title text-green-600">Price: ${room.room_price} per night</h2>
                    <h2 className="text-blue-600 font-bold">Room Size: {room.room_size}</h2>
                    </div>
                    <div className="card-actions justify-between items-center mt-4">
                        <h2 className="font-bold">Availability: <span>Available</span></h2>
                        <Link to={`/bookNow/${_id}`}><button className="btn  text-white font-bold bg-[#FF3811]"><FaShoppingCart></FaShoppingCart>Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;