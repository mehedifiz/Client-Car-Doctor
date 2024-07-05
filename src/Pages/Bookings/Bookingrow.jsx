import React from "react";
import Swal from "sweetalert2";

const Bookingrow = ({ book ,handeConfirm }) => {

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-car-doctor.onrender.com/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error deleting booking:", error);
            Swal.fire({
              title: "Error!",
              text: "There was an issue deleting your booking.",
              icon: "error",
            });
          });
      }
    });
  };

    const {service ,_id, email ,img , name , price,status} = book
    return (




    
        <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-square btn-outline">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-1 md:gap-3">
            <div className="avatar">
              <div className=" rounded md:w-28 w-16">
               { img&& <img
                  src={img}/>}
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{email}</div>
            </div>
          </div>
        </td>
        <td>
          {service}
         
        </td>
        <td>${price}</td>
        <th>
         { status =="comfirm"?<span className="btn  bg-orange-600 text-white btn-ghost btn-xs">Confirmed</span> :<button onClick={()=>handeConfirm(_id)} className="btn btn-ghostbtn-xs">Confirm</button>}
        </th>
      </tr>
    );
};

export default Bookingrow;