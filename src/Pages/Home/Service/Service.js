import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, about, price } = service;
    
    return (
        <div className='service-container'>
            <img src={img} alt="" />
            <div className='service-info'>
                <h2>{name}</h2>
                <h3>Price: {price}</h3>
                <p><small>{about}</small></p>
                <button>BOOK NOW: {name}</button>
            </div>
        </div>
    );
};

export default Service;