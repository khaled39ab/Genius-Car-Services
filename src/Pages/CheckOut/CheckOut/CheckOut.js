import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../../hooks/useServiceDetail';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service, setService] = useServiceDetail(serviceId);

    return (
        <div>
            <h2>Please checkout {service.name}</h2>
        </div>
    );
};

export default CheckOut;