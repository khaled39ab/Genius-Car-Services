import React from 'react';

const Footer = () => {
    const d = new Date();
    const year = d.getFullYear()
    return (
        <div style={{ textAlign: 'center' }}>
            <p><small>Copyright @{year}</small></p>
        </div>
    );
};

export default Footer;