import React from 'react';
import './Service.css'

const Service = (props) => {
    const{name,image,description} =props.service
    return (
        <div>  
     <div class="col h-100">
    <div class="card">
      <img src={image} class="card-img-top img-fluid"  alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{description}</p>
      </div>
      <button className='btn btn-primary w-25 m-3'>Details</button>
     </div>
    </div>
        </div>
    );
};

export default Service;