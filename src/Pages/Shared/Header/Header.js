import React from 'react';
import logo from '../../../images/logo-black.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/" className='brand-icon'>
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='link-name'>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#experts">Experts</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        {
                            user ?
                                <button className='btn btn-link text-white text-decoration-none fw-bold' onClick={handleSignOut}>Sign Out</button> :
                                <Nav.Link as={Link} to="/logIn">Log in</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;