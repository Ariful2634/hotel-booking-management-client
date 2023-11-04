import { useEffect, useState } from "react";
import Room from "./Room";


const Rooms = () => {

    const [rooms,setRooms]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/rooms')
        .then(res=>res.json())
        .then(data=>setRooms(data))
    },[])

    return (
        <div>
            <h2 className="text-center text-5xl font-bold text-blue-600 italic mt-6">Available Rooms</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ml-5 md:ml-0 mt-16 gap-10">
                {
                    rooms.map(room=><Room key={room._id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;