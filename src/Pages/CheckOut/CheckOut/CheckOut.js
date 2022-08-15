import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../hooks/useServiceDetail';
import { toast } from 'react-toastify';

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
        axios.post('https://secret-temple-74237.herokuapp.com/order', order)
            .then(res => {
                const {data} = res;
                if (data.insertedId){
                    toast('Your order is booked!! See you soon')
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <h2>Please checkout {service.name}</h2>
            <form className='w-50 mx-auto' onSubmit={handleOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name='name' placeholder='Name' disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={user?.email} name='email' placeholder='Email' disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name='service-name' placeholder='Service Name' disabled />
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