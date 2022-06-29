import { sendEmailVerification } from 'firebase/auth';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();

    let errorElement;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegister = async e => {
        e.preventDefault();
        // const displayName = e.target.name.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password)
        // await updateProfile({ displayName });
        await updateProfile({ displayName: name });
        navigate('/')
    }

    // useEffect( ()=>{
    //     if (user) {
            
    //     }
    // },[user, navigate])

    if (error) {
        errorElement = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    return (
        <div className='w-50 mx-auto mt-3 border border-3 rounded p-3'>
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree with terms & condition" required />
                </Form.Group>
                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Register
                </Button>
                <p className='mt-3'>Have an Account? <Link to={'/login'} className='text-danger pe-auto text-decoration-none'>Please Login</Link></p>
            </Form>
            {
                errorElement
            }
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;