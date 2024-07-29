import { useContext } from "react";
import { Authcontext } from "../providers/Authprovider";

const UseAuth = () => {
    const auth = useContext(Authcontext)
    return auth;
};

export default UseAuth;