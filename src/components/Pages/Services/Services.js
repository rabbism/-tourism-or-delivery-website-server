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
      <div>
          {
              services.length ===0 ? <div class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>:
            <div class="row row-cols-1 row-cols-md-3 g-4 container">
            {
                   services.map(service => <Service service={service}></Service>)
            }
        </div>
          }
            
      </div>
    );
};

export default Services;