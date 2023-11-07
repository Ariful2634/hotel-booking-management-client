/* eslint-disable react/prop-types */
import { SlCalender } from 'react-icons/sl';
import { AiTwotoneDelete } from 'react-icons/ai';
import { GrDocumentUpdate } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const Book = ({ book, books, setBooks }) => {
    console.log(book)

    const {_id, room_image, RoomName, date, price } = book

    const deadline = new Date(date)
   const time =  deadline.setDate(deadline.getDate()-1)
   console.log(time)

    const handleDelete = (_id)=>{
        const currentDate = new Date()
        if(currentDate < time){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
    
                   
                    fetch(`http://localhost:5000/bookings/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                  Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                  )
                                  const reamining = books.filter(book=>book._id!==_id)
                                  setBooks(reamining)
                            }
                        })
    
                }
            })
        }
        else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can not cancel your booking now!",
                
              });
        }
    }

    return (
        <div>
            <div className="card card-compact lg:w-[450px] bg-base-100 shadow-xl">
                <figure><img src={room_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-green-600  font-bold">{RoomName}</h2>
                    <div className="flex gap-28 items-center text-blue-600 text-lg font-bold ">
                    <p>Price: {price} per night</p>
                    <p className='flex items-center gap-2'> <SlCalender></SlCalender> {date}</p>
                    </div>
                    <div className="card-actions justify-around mt-5">
                        <Link to={`/update/${_id}`}><button className='btn font-bold bg-gradient-to-r from-pink-500 to-yellow-500'><GrDocumentUpdate></GrDocumentUpdate> Update</button></Link>
                        <button onClick={()=>handleDelete(_id)} className="btn btn-error btn-outline font-bold"> <AiTwotoneDelete></AiTwotoneDelete> Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;