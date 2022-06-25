import React from 'react';
import logo from '../../../images/logo-black.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home" className='brand-icon'>
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='link-name'>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">Experts</Nav.Link>
                        <Nav.Link href="#dee">About</Nav.Link>
                        <Nav.Link href="#memes">Log in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;