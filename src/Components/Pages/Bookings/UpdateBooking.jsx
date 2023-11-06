import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const UpdateBooking = () => {

    const {user}=useContext(AuthContext)

    const updates = useLoaderData()
    const {id}=useParams()
    console.log(updates)
    console.log(id)

    const update = updates.find(updates=>updates._id==id)
    console.log(update)
    const {_id}=update

    const [datePicker, setDatePicker] = useState(null);

  const handleDateChange = (date) => {
    setDatePicker(date);
  };

    const handleForm = e=>{
        e.preventDefault()
        const form = e.target
        
        const date = form.date.value
       
        

        const newUpdate = {
           date
         }
         console.log(newUpdate)

         fetch(`http://localhost:5000/update/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newUpdate)
         })
         .then(res=>res.json())
         .then(data=>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Congratulations',
                    'Updated Successfully!',
                    'success'
                  )
            }
         })

        

    }

    return (
        <div>
            <form onSubmit={handleForm}>
            <div className="flex gap-5">
                <div className="form-control w-1/2">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder=" Name" defaultValue={update.name} className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-1/2 lg:ml-4">
                        <label className="label">
                            <span className="label-text">Add New Date</span>
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
                        <input type="text" name="price" placeholder="Price" defaultValue={update.price} className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            
            <div className="mt-4">
                <button className="btn btn-block  bg-[#FF3811]">Submit</button>
            </div>
        </form>
        </div>
    );
};

export default UpdateBooking;