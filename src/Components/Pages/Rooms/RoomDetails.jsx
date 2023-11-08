import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import {  useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

import Review from "./Review";


const RoomDetails = () => {

    // const { user } = useContext(AuthContext)

    const [avil, setAvail] = useState([])
    const rooms = useLoaderData()
    const [getReview, setGetReview] = useState([])
    const { id } = useParams()
    

    const room = rooms.find(room => room._id == id)
    const { _id } = room
    

    const url = 'http://localhost:5000/bookings'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAvail(data))
    }, [url])



    const val = avil.find(avil => avil.roomId == _id)
    



    // review
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setGetReview(data))
    }, [])

    // const review = getReview.map(rev=>rev)
    const reviews = getReview.filter(view => view.reviewId == _id)
    console.log(reviews.length)

    const handleDisable = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "This room is already booked!",

        });
    }


    return (
        <div className=" lg:justify-between mt-10">

           <div className="flex justify-center mr-5">
           <div className="card w-96 md:w-[550px] lg:w-[550px]  bg-base-100 shadow-xl ml-5 md:ml-28 lg:ml-0 text-center">
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
                                val ? <h2 className="font-bold">Availability: <span>Unavailable</span></h2> :
                                    <h2 className="font-bold">Availability: <span>Available</span></h2>
                            }
                        </div>
                        <div>
                            <p className="font-bold">Special Offers: Not Available</p>
                        </div>
                    </div>
                    
                        
                        <div className="mt-8">
                            {
                                val ? <button onClick={handleDisable} className="btn btn-disable">Book Now</button> :
                                    <Link to={`/bookNow/${_id}`}><button className="btn  text-white font-bold bg-[#FF3811]"><FaShoppingCart></FaShoppingCart>Book Now</button></Link>
                            }
                        </div>
                    
                </div>
            </div>
           </div>

           
            {
                reviews.length > 0 ? ( <div>
                    {
                         reviews.map(rev=><Review key={rev._id} rev={rev}></Review>) 
                           
                    }
                    </div>) :
                    
                    (<div>
                    <h2 className="text-blue-600 text-center font-bold italic mt-28 mb-4 text-2xl">Reviews From Our User</h2>
                    <p className="font-bold text-center text-red-600">There is no review for this room</p>
                </div>)

            }
           
        </div>
    );
};

export default RoomDetails;