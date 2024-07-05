import { useContext } from "react";
import { Authcontext } from "../providers/Authprovider";
import { Navigate, useLocation } from "react-router-dom";


const Priveteroute = ({children}) => {
    const {user , loading} = useContext(Authcontext)

    const location = useLocation()
    console.log(location)

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
    
};

export default Priveteroute;