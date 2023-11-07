/* eslint-disable no-undef */
import axios from "axios";
import { useContext, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const Bookings = () => {


    const [datePicker, setDatePicker] = useState(null);

  const handleDateChange = (date) => {
    setDatePicker(date);
  };

    const {user}=useContext(AuthContext)

    const books = useLoaderData()
    const { id } = useParams()
    console.log(books, id)

    const book = books.find(book => book._id == id)
    const {_id,room_image,room_name}=book

    const handleForm = e=>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const price = form.price.value
        const email = user?.email

        const booking = {
            RoomName:room_name, room_image,
            roomId:_id,
             name,date,price,email
         }
         console.log(booking)

         axios.post('http://localhost:5000/bookings',booking)
         .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire(
                    'Congratulations',
                    'Room Booked Successfully!',
                    'success'
                  )
            }
         })

    }

    return (
        <div>
        <h2 className="font-bold text-center mb-6 text-xl">Room Name: <span className="text-blue-700">{book.room_name}</span></h2>
        <form onSubmit={handleForm}>
            <div className="flex gap-5">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder=" Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Booking Date</span>
                        </label>
                        <div className="input-group">
                            <DatePicker
                                name="date"
                                selected={datePicker}
                                onChange={handleDateChange}
                                placeholderText="Select Due Date"
                                dateFormat="MM/dd/yyyy"
                                className="w-full input input-bordered"
                            />
                        </div>
                    </div>
            </div>
            <div className="flex gap-5">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <label className="input-group">
                        <input type="email" defaultValue={user?.email} placeholder="email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text"></span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="Price" defaultValue={'$' + book.room_price} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            
            <div className="mt-4">
                <button className="btn btn-block  bg-[#FF3811]">Submit</button>
            </div>
        </form>
        <div className="text-center mt-4">
            <Link to={`/summery/${_id}`}><button className="btn btn-info">View Summery</button></Link>
        </div>
    </div>
    );
};

export default Bookings;