/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Room = ({ room }) => {

    const {_id, room_image, room_name, room_price } = room

    return (
        <div>
           <Link to={`/roomDetails/${_id}`}>
           <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={room_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-600 font-bold">{room_name}</h2>
                    <p className="font-bold">Price: ${room_price} per night</p>
                   
                </div>
            </div>
           </Link>
        </div>
    );
};

export default Room;