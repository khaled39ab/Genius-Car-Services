import React from 'react';

const Service = ({service}) => {
    const {name, img, about, price} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Service;