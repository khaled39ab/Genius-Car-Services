import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <div className='text-center'>
            <p><small>Copyright @{year}</small></p>
        </div>
    );
};

export default Footer;