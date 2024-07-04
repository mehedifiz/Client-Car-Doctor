import { Link } from "react-router-dom";

import logo from '../../../../assets/logo.svg'
import { useContext } from "react";
import { Authcontext } from "../../../../providers/Authprovider";
import { toast } from "react-toastify";

const Navber = () => {
   const {user , logOut} = useContext(Authcontext)

   const handleLogout =()=>{
    logOut()


    .then(data=>{
      toast.success("LogOut Successfully !", {
        position: "top-center"
      });
    })

    .catch(e => console.log(e))
   }

    const links = <>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/about'>About Us</Link></li>
       {
         user ? 
         <>
         <li><Link to='/bookings'>My Orders</Link></li>
         <li><button onClick={handleLogout}>LogOut</button></li>
         
         </>
         
         
         : <>
           <li><Link to='/login'>Login</Link></li>
         <li><Link to='/register'>Register</Link></li>
         </>

        
    }
    
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost text-xl">
        <img src={logo} alt="Logo" />
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline btn-warning">Appoinment</a>
  </div>
</div>
    );
};

export default Navber;