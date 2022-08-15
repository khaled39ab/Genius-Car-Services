import React from 'react';
import useServices from '../../hooks/useSerivces';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure to delete?')
        if(proceed){
            const url = `https://secret-temple-74237.herokuapp.com/service/${id}`;
            fetch(url, {
                method:'DELETE',
            })
            .then (res => res.json())
            .then (data => {
                const remaining = services.filter( service =>service._id !== id)
                setServices(remaining);
            })
        }
    }

    return (
        <div>
            <h2>Manage your services</h2>
            {
                services.map (service =><div key={service._id} className="text-center mb-3">
                    <h4>{service.name} <button onClick={ () => handleDelete (service._id)}>x</button></h4>
                </div>)
            }
        </div>
    );
};

export default ManageServices;