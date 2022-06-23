import React from 'react';
import CustomLink from '../../Others/CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            {/* <img src={logo} alt="" /> */}
            <div className='custom-link'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/shop'}>Shop</CustomLink>
                <CustomLink to={'/order-review'}>Order Review</CustomLink>
                <CustomLink to={'/inventory'}>Inventory</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'/login'}>Log In</CustomLink>

            </div>
        </nav>
    );
};

export default Header;