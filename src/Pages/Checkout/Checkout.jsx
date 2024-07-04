import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Authcontext } from "../../providers/Authprovider";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const {user} = useContext(Authcontext)

    const service = useLoaderData()
    const { title , price , _id, img} =service

    const handleBook = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email
        
        const order = {
            name,
            date ,
            email,
            price: price,
            service : title,
            service_id : _id,
            img
            

        }

        console.log(order)
       

        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            }
            ,
            body: JSON.stringify(order)
        }
        ) 


        .then(res => res.json() )
        .then(data =>{
          console.log(data)
          console.log(data.insertedId)
          if(data.insertedId){
            toast.info("Your order has been placed!", {
              position: "top-center"
            });
          }
        })

        .catch(e =>{
            console.log(e)
        })

 }
    
    return (

       
        
        <div>

            <h2 className="text-center text-3xl font-semibold">Book Service :{title}</h2>


      <form onSubmit={handleBook} className="card-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" defaultValue={user?.name} className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" required />
          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name="email" className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Due amount</span>
          </label>
          <input type="text" defaultValue={"$" +price} className="input input-bordered" required />
          
        </div>
       
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-block bg-orange-500 text-white  hover:text-xl hover:bg-orange-700" type="submit" value="Order Comfrim" />
        </div>
      </form>
    </div>
  
            
        
    );
};

export default Checkout;