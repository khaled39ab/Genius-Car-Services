import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, about, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container text-center'>
            <img src={img} alt="" />
            <div className='service-info'>
                <h2>{name}</h2>
                <h3>Price: {price}</h3>
                <p><small>{about}</small></p>
                <button onClick={() => navigateToServiceDetail(id)}>BOOK NOW: {name}</button>
            </div>
        </div>
    );
};

export default Service;