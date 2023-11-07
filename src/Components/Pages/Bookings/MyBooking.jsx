import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import { AuthContext } from "../../Provider/AuthProvider";
import { Helmet } from "react-helmet";

const MyBooking = () => {

    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])
    const [books, setBooks] = useState(booking)

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setBooking(res.data)
            })
    }, [url])

    return (
        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>My Bookings</title>
                <link rel="canonical" href="http://localhost:5173/booking" />
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 lg:ml-28 mt-16">
                {
                    booking.map(book => <Book key={book._id} books={books} setBooks={setBooks} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default MyBooking;