import { useState } from "react";
import { useEffect } from "react";
import Service from "./Service";

const Services = () => {

    const [services , setServices] = useState([])

    useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setServices(data)
        })
    },[])
    return (
        <div className="my-10" >
            
            <div className="text-center space-y-3 mb-10">
                <h3 className="text-2xl font-bold text-orange-500">Our Services</h3>
                    <h2 className="text-4xl ">Our Service Area</h2>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto border">
                {services.map(service => <Service
                key={service._id} service={service}
                ></Service>)}
            </div>

        </div>
    );
};

export default Services;