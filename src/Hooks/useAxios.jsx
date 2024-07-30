import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSceure  =axios.create({
    baseURL:'http://localhost:5000',
    withCredentials: true,

})
const useAxios = () => {
    const {logOut}= UseAuth();
    const navigate = useNavigate()

    useEffect(()=>{
        axiosSceure.interceptors.response.use(res =>{
            return res;
        }, error =>{
            console.log('error tracked by interceptoor' , error.message)
            if(error.response.status === 401 || error.response.status===403){
                console.log('logOut the user')
                logOut() 
                    .then(()=>{
                        navigate('/login')
                    })
            }
        })
    },[])
   
    return  axiosSceure;
};

export default useAxios;