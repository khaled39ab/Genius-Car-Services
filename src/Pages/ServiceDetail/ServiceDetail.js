import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    
    /* const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:3000/service/${serviceId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []); */
    
    return (
        <div>
            <h2>This is service detail {serviceId}</h2>
            <div className='text-center'>
                <Link to={'/checkout'}>
                    <Button variant="primary">Proceed Checkout</Button>{' '}
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;