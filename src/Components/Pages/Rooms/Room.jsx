/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import moment from 'moment';
import axios from "axios";
import Swal from "sweetalert2";

const Room = ({ room }) => {

    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])
    const [rev, setRev] = useState([])

    const { _id, room_image, room_name, room_price } = room;

    const url = `https://hotel-booking-management-server.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [url])

    
   

    const timestamp = moment()

    const time =  timestamp.format('MMMM Do YYYY, h:mm:ss a')

 
    const reviews = review.find(review => review.RoomName == room_name)


    useEffect(() => {
        fetch('https://hotel-booking-management-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setRev(data))
    }, [])

    // const review = getReview.map(rev=>rev)
    const count = rev.filter(view => view.room_name ==room_name)
    
    console.log(count)
    // console.log(room._id)

    let co = 0;

    if(count){
       co= co+count.length;
        
    }
    
    

    const handleReview = e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const des = form.area.value;
        const rating = form.rating.value;
        const send = {name,rating,time, reviewId:_id,des,room_name}
        console.log(send)

        axios.post('https://hotel-booking-management-server.vercel.app/review', send)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire(
                    'Congratulations',
                    'You Reviewed Successfully!',
                    'success'
                  )
                  form.reset()
            }
        })
    }


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
            <div>
                <p className="font-bold text-center mt-2">Reviews of this room is: {
                    co
                    } </p>
            </div>
           {
            reviews ? (
                <div className="shadow-xl w-96 mt-5 p-2">
                     <form onSubmit={handleReview}>
                        <div className=" form-control" >
                      <label className="label">
                                <span className="label-text">Username</span>
                            </label>
                            <input type="text" placeholder="Username" name="name" className="input input-bordered" required />
                        </div>
                        <div className=" form-control" >
                            <label className="label">
                                <span className="label-text">Add Rating</span>
                            </label>
                            <input type="text" placeholder="Add Rating" name="rating" className="input input-bordered" required />
                        </div>
                        <textarea className="textarea textarea-accent mt-4 w-[360px]" name="area" placeholder="Comment"></textarea>
                       
                        <p className="text-center">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>

                        <div className="form-control mt-6">
                            <button
                                
                                className=" text-white font-[700] rounded-lg py-4 px-6 w-full bg-gradient-to-r from-pink-500 to-yellow-500 "
                            >
                               Submit
                            </button>
                        </div>
                    </form>

                
            </div>
            ) :
            <p className="text-center w-[350px] font-bold text-red-600 text-x mt-6 border border-purple-600 rounded-xl ">You have not booked this room yet. <br /> That is why there is no review option</p>
           }
        </div>
    );
};

export default Room;