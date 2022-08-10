import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handleOrder = e => {
        e.preventDefault();
        const order = {
            id: serviceId,
            name: user.displayName,
            email: user.email,
            service: service.name,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('', order)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div>
            <h2>Please checkout {service.name}</h2>
            <form className='w-50 mx-auto' onSubmit={handleOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={user?.email} name='email' placeholder='Email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service-name' placeholder='Service Name' required readOnly disabled />
                <br />
                <textarea className='w-100 mb-2' type="text" name='address' placeholder='Address' required />
                <br />
                <input className='w-100 mb-2' type="text" name='phone' placeholder='Phone' required autoComplete='off' />
                <br />
                <input className='w-100 btn btn-primary mb-5' type="submit" value="Order Now" />
            </form>
        </div>
    );
};

export default CheckOut;