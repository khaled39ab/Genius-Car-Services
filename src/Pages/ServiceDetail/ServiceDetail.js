import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
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