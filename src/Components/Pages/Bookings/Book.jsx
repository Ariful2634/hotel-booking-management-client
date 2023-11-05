/* eslint-disable react/prop-types */
import { SlCalender } from 'react-icons/sl';
import { AiTwotoneDelete } from 'react-icons/ai';


const Book = ({ book }) => {

    const { room_image, RoomName, date, price } = book

    return (
        <div>
            <div className="card card-compact lg:w-[450px] bg-base-100 shadow-xl">
                <figure><img src={room_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-600 font-bold">{RoomName}</h2>
                    <div className="flex gap-28 items-center text-blue-600 text-lg font-bold ">
                    <p>Price: {price} per night</p>
                    <p className='flex items-center gap-2'> <SlCalender></SlCalender> {date}</p>
                    </div>
                    <div className="card-actions justify-center mt-5">
                        <button className="btn btn-error btn-outline font-bold"> <AiTwotoneDelete></AiTwotoneDelete> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;