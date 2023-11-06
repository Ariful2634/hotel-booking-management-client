import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const RoomDetails = () => {

    const { user } = useContext(AuthContext)

    const [avil,setAvail]=useState([])
    const rooms = useLoaderData()
    const { id } = useParams()
    console.log(rooms, id)

    const room = rooms.find(room => room._id == id)
    const {_id}=room

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setAvail(data))
    },[url])

    const val = avil.find(avil=>avil.roomId==_id)

    const handleDisable = ()=>{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This room is already booked!",
            
          });
    }
    

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
                       <div>
                        {
                            val ?  <h2 className="font-bold">Availability: <span>Unavailable</span></h2> :
                            <h2 className="font-bold">Availability: <span>Available</span></h2>
                        }
                       </div>
                        <div>
                            {
                                val ? <button onClick={handleDisable} className="btn btn-disable">Book Now</button> :
                                <Link to={`/bookNow/${_id}`}><button className="btn  text-white font-bold bg-[#FF3811]"><FaShoppingCart></FaShoppingCart>Book Now</button></Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;