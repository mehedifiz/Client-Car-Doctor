import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firenase.config";


export const Authcontext = createContext(null)

const Authprovider = ({children}) => {
const [user ,setUser] = useState(null);
const [loading , setLoading] = useState(true)


const createuser =(email , password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword( auth , email , password )
}

const login =(email , password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth , email , password)
}



useEffect( ()=>{
   const unsubcribe = onAuthStateChanged(auth , crrruntUser=>{
        setUser(crrruntUser);
        setLoading(false)
        console.log(crrruntUser)
    });
    return ()=>{ 
        unsubcribe()
    }
},[])



    const Authinfo = {
        user,
        loading,
        createuser,
        login
    } 
    return (
        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;