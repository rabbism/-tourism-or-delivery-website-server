import React from 'react';
import './Service.css'

const Service = (props) => {
    const{name,image,description} =props.service
    return (
        <div>
            
            <div class="col-sm-12 col-md-6 col-lg-4">
                <div class="p-3 border">
                    <img className='img-fluid' src={image} alt="" />
                    <h3>{name}</h3>
                    <p> {description}</p>
                    <button className='btn btn-primary'>Details</button>
                </div>
                </div>
        </div>
    );
};

export default Service;