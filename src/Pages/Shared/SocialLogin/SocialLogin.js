import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [
        signInWithGoogle,
        googleUser,
        googleLoading,
        googleError
    ] = useSignInWithGoogle(auth);

    const [
        signInWithGithub,
        githubUser,
        githubLoading,
        githubError
    ] = useSignInWithGithub(auth);

    const [
        signInWithFacebook,
        facebookUser,
        facebookLoading,
        facebookError
    ] = useSignInWithFacebook(auth);

    let errorEl;

    if (googleLoading || githubLoading || facebookLoading) {
        return <Loading></Loading>
    };

    if (googleError || githubError || facebookError) {
        errorEl = <p className='text-danger'>Error: {googleError?.message} {githubError?.message} {facebookError?.message}</p>
    };

    if (googleUser || githubUser || facebookUser) {
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