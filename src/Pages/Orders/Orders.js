import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [order, setOrder] = useState([]);
    useEffect( () =>{
        const getOrder = async () =>{
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const {data} = await axios.get(url);
            setOrder(data);
        }
        getOrder();

    },[])

    return (
        <div>
            <h2>You Order(s): {order.length}</h2>
        </div>
    );
};

export default Orders;