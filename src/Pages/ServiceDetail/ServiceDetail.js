import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    
    return (
        <div>
            <h2>You are going to booking about :: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <Button variant="primary">Proceed Checkout</Button>{' '}
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;