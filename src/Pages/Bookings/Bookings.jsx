import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../providers/Authprovider";
import Bookingrow from "./Bookingrow";
import Banner2 from "../Home/Components/Banner/Banner2";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Bookings = () => {
    const { user } = useContext(Authcontext);
    const [booking, setBookings] = useState([]);
    const title = 'Cart Details';

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url]);
    
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            "Deleted!",
                            "Your booking has been deleted.",
                            "success"
                        );
                        const remaining = booking.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }
                })
                .catch(error => {
                    console.error("Error deleting booking:", error);
                    Swal.fire(
                        "Error!",
                        "There was an issue deleting your booking.",
                        "error"
                    );
                });
            }
        });
    }
    
    
    const handleConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = booking.filter(booking => booking._id !== id);
                    const updated = booking.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                    toast.info("Your order has been confirmed", {
                        position: "top-center"
                    });
                }
            })
    }

    return (
        <div>
            <Banner2 banner={{ title, booking }} />

            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="bg-gray-200 text-xl font-light">
                        <tr>
                            <th></th>
                            <th className="text-sm">Customer Name</th>
                            <th className="text-sm">Service</th>
                            <th className="text-sm">Price</th>
                            <th className="text-sm"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {booking.map(book => (
                            <Bookingrow
                                key={book._id}
                                book={book}
                                handleConfirm={handleConfirm}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
