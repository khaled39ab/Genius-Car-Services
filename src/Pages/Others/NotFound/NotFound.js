import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../../images/404.webp';

const NotFound = () => {
    return (
        <div className='text-center w-100'>
            <img src={notFound} alt="" />
            <h2><Link to={'/'}>Go to Home</Link></h2>
        </div>
    );
};

export default NotFound;