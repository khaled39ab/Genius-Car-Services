import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);

    const [
        signInWithGithub,
        user1,
        loading1,
        error1
    ] = useSignInWithGithub(auth);

    const [
        signInWithFacebook,
        user2,
        loading2,
        error2
    ] = useSignInWithFacebook(auth);

    let errorEl;

    if (loading || loading1 || loading2) {
        return <Loading></Loading>
    };

    if (error || error1 || error2) {
        errorEl = <p className='text-danger'>Error: {error?.message} {error1?.message} {error2?.message}</p>
    };

    if (user || user1 || user2) {
        navigate('/')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
                <p className='mx-3 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
            </div>
            {
                errorEl
            }
            <div className=''>
                <button onClick={() => { signInWithGoogle() }} style={{ color: 'white' }} className='btn btn-info mx-auto w-50 d-block mb-2'>
                    <span className='pe-2'>
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </span>
                    Sign In With Google
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-primary mx-auto w-50 d-block mb-2'>
                    <span className='pe-2'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </span>
                    Sign In With Facebook
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-dark mx-auto w-50 d-block'>
                    <span className='pe-2'>
                        <FontAwesomeIcon icon={faGithub} />
                    </span>
                    Sign In With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;