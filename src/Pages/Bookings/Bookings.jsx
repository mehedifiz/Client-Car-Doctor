import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../providers/Authprovider";
import Bookingrow from "./Bookingrow";

const Bookings = () => {

    const {user} = useContext(Authcontext)
    console.log(user)
    

    const [booking , setBookings] = useState([])
    const [load , setLoad] = useState(true)


    const url=`http://localhost:5000/bookings?email=${user.email}`

    useEffect( ()=>{
        fetch(url)

        .then(res => res.json())
        .then(data =>{
            setBookings(data)
            setLoad(!load)
        })

        .catch(e =>{
            console.log(e)
        })

    }, [load])

    return (
        <div>
            <h2>Your Bookings {booking.length}</h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className="bg-gray-200 text-xl font-light">
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Customer Name</th>
        <th>Service</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        booking.map(book => <Bookingrow
        key={book._id}
        book={book}
        ></Bookingrow>)
     }
     
     
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Bookings;