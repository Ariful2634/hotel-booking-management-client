/* eslint-disable react/prop-types */


const Room = ({ room }) => {

    const { room_image, room_name, room_price } = room

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={room_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-600 font-bold">{room_name}</h2>
                    <p className="font-bold">Price: ${room_price} per night</p>
                   
                </div>
            </div>
        </div>
    );
};

export default Room;