import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
import { Helmet } from 'react-helmet-async';
import useToken from '../../hooks/useToken';

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

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);

    if (token) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);

        /* const {data} = await axios.post('https://secret-temple-74237.herokuapp.com/login', {email})
        localStorage.setItem('accessToken', data.accessToken); */
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        } else {
            toast('Enter Your Email')
        }
    }
    
    return (
        <div className='w-50 mx-auto mt-3 border border-3 rounded p-3'>
            <Helmet>
                <title>Login - Genius Car Service</title>
            </Helmet>
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
                <p className='mt-3'>New to Genius Car? <Link to={'/register'} className='text-primary pe-auto text-decoration-none register-link'>Please Register</Link></p>

                <p className='mt-3'>Forget Password? <span onClick={handleResetPassword} className='text-primary pe-auto text-decoration-none register-link'>Reset Password</span></p>
            </Form>
            {
                errorElement
            }
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;