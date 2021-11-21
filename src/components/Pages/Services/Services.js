import React, { useEffect } from 'react';
import { useState } from 'react';
import Service from '../Serivce/Service';

const Services = () => {
    const[services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://fathomless-badlands-24178.herokuapp.com/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div class="container px-4 w-75 mt-5">
           <div class="row gx-5">
               {
                   services.map(service => <Service service={service}></Service>)
               }
           </div>
        </div>
    );
};

export default Services;