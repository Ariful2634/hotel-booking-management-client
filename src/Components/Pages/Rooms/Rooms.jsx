import { useEffect, useState } from "react";
import Room from "./Room";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [priceFilter, setPriceFilter] = useState({ min: null, max: null });

  useEffect(() => {
    fetch("http://localhost:5000/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);
  

  const filteredRooms = () => {
    return rooms?.filter((room) => {
      const roomPrice = room?.room_price; 
      // console.log(roomPrice)

      if (priceFilter.min === null && priceFilter.max === null) {
        return true;
      }
      return (
        (priceFilter.min === null || roomPrice >= priceFilter.min) &&
        (priceFilter.max === null || roomPrice <= priceFilter.max)
      );
      
    });
    
  };
  

 
  return (
    <div >
      <h2 className="text-center text-5xl font-bold text-blue-600 italic mt-6">
        Available Rooms
      </h2>
      <div className="mt-8 ml-8 text-center border rounded-lg font-bold italic text-white bg-blue-400 w-[180px] p-3">
        <label>
          Price Range:
          <select className="text-center ml-2 rounded-lg text-black"
            onChange={(e) => {
              const selectedPrice = e.target.value;
              if (selectedPrice === "all") {
                setPriceFilter({ min: null, max: null });
              } else {
                const price = parseInt(selectedPrice);
                setPriceFilter({ min: 0, max: price });
              }
              console.log(selectedPrice)
              
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
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 ml-5 md:ml-0 mt-16 gap-10">
        {filteredRooms().map((room) => (
          <Room key={room._id} room={room}></Room>
        ))}
      </div>
    </div>
  );
};

export default Rooms;