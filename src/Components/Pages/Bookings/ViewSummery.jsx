import { useLoaderData, useParams } from "react-router-dom";


const ViewSummery = () => {

    const summery = useLoaderData()
    const { id } = useParams()
    const room = summery.find(room => room._id == id)

    return (
        <div className="flex justify-center mt-5">
            
            <div className="card w-[400px] bg-primary text-white">
                <div className="card-body">
                    <h2 className="card-title">Room Name: {room.room_name}</h2>
                    <p>{room.room_description}</p>
                    <p>Price: ${room.room_price} per night</p>
                    <p>Date: You did not choose any date</p>
                    <p>Room Size: {room.room_size}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ViewSummery;