import React, { useEffect, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    
    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value

        signInWithEmailAndPassword(email, password)
    }

    useEffect( ()=>{
        if (user) {
            navigate(from, { replace: true });
        }
    },[user, from, navigate])

    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message}</p>
    }
    
    return (
        <div className='w-50 mx-auto mt-3 border border-3 rounded p-3'>
            <h2 className='text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Login
                </Button>
                <p className='mt-3'>New to Genius Car? <Link to={'/register'} className='text-danger pe-auto text-decoration-none register-link'>Please Register</Link></p>
            </Form>
            {
                errorElement
            }
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;