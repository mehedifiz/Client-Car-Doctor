import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../providers/Authprovider";
import Bookingrow from "./Bookingrow";
import Banner2 from "../Home/Components/Banner/Banner2";
import { toast } from "react-toastify";

const Bookings = () => {
    const { user } = useContext(Authcontext);
    const [booking, setBookings] = useState([]);
    const title = 'Cart Details';

    const url = `https://server-car-doctor.onrender.com?email=${user.email}`;

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBookings();
    }, [url]);

    const handleConfirm = async (id) => {
        try {
            const response = await fetch(`https://server-car-doctor.onrender.com/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: 'confirm' })
            });

            const data = await response.json();
            if (data.modifiedCount > 0) {
                const updatedBookings = booking.map(book =>
                    book._id === id ? { ...book, status: 'Confirmed' } : book
                );
                setBookings(updatedBookings);

                toast.info("Your order has been confirmed", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

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
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
