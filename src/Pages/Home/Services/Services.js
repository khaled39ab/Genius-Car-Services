import React, { useEffect, useState } from 'react';
import useServices from '../../../hooks/useSerivces';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useServices();
    /* useEffect(() => {
        fetch('https://secret-temple-74237.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []) */

    return (
        <div id='services' className='container mt-4'>
            <h1 className='services-title my-3'>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;