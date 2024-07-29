import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firenase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";


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

    const googleProvider = new GoogleAuthProvider();

    const google = ()=>{
        setLoading(true)
       return signInWithPopup(auth , googleProvider)
    }



useEffect( ()=>{
   const unsubcribe = onAuthStateChanged(auth , currentUser=>{

    const userEmail = currentUser?.email || user?.email;
    
    setUser(currentUser);
    setLoading(false)
    
    const loggedUser ={email: userEmail}
       if(currentUser){
       
        axios.post('http://localhost:5000/',loggedUser , {withCredentials : true})

        .then(res =>{
            console.log('token res', res.data)
        })
         
       } else{
                axios.post('http://localhost:5000/logout', loggedUser,{
                    withCredentials: true
                } )
                
                .then(res=>{
                     console.log(res.data)
                })
       }

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
        logOut,
        google
    } 
    return (
        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;