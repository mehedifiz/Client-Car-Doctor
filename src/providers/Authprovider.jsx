import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
const logOut = () =>{
    setLoading(true)

      return signOut(auth)
    }



useEffect( ()=>{
   const unsubcribe = onAuthStateChanged(auth , crrruntUser=>{
        setUser(crrruntUser);
       setLoading(false)

    });
    return ()=>{ 
        unsubcribe()
    }
},[])


  


    const Authinfo = {
        user,
        loading,
        createuser,
        login,
        logOut
    } 
    return (
        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;