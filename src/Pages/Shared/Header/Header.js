import React from 'react';
import CustomLink from '../../Others/CustomLink/CustomLink';
import logo from '../../../images/logo-black.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='custom-link'>
                <CustomLink to={'/'}>Home</CustomLink>
                <CustomLink to={'/booking-review'}>Booking Review</CustomLink>
                <CustomLink to={'/inventory'}>Inventory</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
                <CustomLink to={'/login'}>Log In</CustomLink>

            </div>
        </nav>
    );
};

export default Header;