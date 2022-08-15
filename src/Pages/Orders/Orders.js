import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        const getOrder = async () => {
            const email = user.email;
            const url = `https://secret-temple-74237.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setOrder(data);
            }
            catch (err) {
                console.log(err.message);
                if (err.response.status === 401 || err.response.status === 403) {
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getOrder();

    }, [user, navigate])

    return (
        <div className='w-50 mx-auto mb-5'>
            <h2 className='text-info my-4'>You Order(s): {order.length}</h2>
            {
                order.map(or => <div
                    key={or._id}
                ><h5><li><span className='text-warning'>Token No. {or._id}</span> :: {or.service}  </li></h5></div>)
            }
        </div>
    );
};

export default Orders;