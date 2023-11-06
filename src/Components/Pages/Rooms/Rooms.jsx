import { useEffect, useState } from "react";
import Room from "./Room";


const Rooms = () => {

    // const [rooms,setRooms]=useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:5000/rooms')
    //     .then(res=>res.json())
    //     .then(data=>setRooms(data))
    // },[])

    const [rooms, setRooms] = useState([]);
    const [priceFilter, setPriceFilter] = useState({ min: 50, max: 200 });
  
    useEffect(() => {
      fetch("http://localhost:5000/rooms")
        .then((res) => res.json())
        .then((data) => setRooms(data));
    }, []);
  
    const filteredRooms = () => {
      return rooms.filter((room) => {
        const roomPrice = room.price; // Adjust this based on your room data structure
        if (priceFilter.min === priceFilter.max) {
          // Show all rooms when "All" is selected
          return true;
        }
        return roomPrice >= priceFilter.min && roomPrice <= priceFilter.max;
      });
    };
  

  

    return (
        // <div>
        //     <h2 className="text-center text-5xl font-bold text-blue-600 italic mt-6">Available Rooms</h2>
        //     <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ml-5 md:ml-0 mt-16 gap-10">
        //         {
        //             rooms.map(room=><Room key={room._id} room={room}></Room>)
        //         }
        //     </div>
        // </div>

        <div>
      <h2 className="text-center text-5xl font-bold text-blue-600 italic mt-6">
        Available Rooms
      </h2>
      {/* Filter controls for price range */}
      <div className="mt-4">
        <label>
          Price Range:
          <select
            onChange={(e) => {
              const selectedPrice = parseInt(e.target.value);
              setPriceFilter({ min: selectedPrice, max: selectedPrice });
            }}
          >
            <option value="all">All</option>
            <option value="50">50</option>
            <option value="80">80</option>
            <option value="100">100</option>
            <option value="120">120</option>
            <option value="150">150</option>
            <option value="200">200</option>
          </select>
        </label>
      </div>
      {/* Display rooms based on the filtered data */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ml-5 md:ml-0 mt-16 gap-10">
        {filteredRooms().map((room) => (
          <Room key={room._id} room={room}></Room>
        ))}
      </div>
    </div>
    );
};

export default Rooms;

