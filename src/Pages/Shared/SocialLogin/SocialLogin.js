import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
                <p className='mx-3 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
            </div>
            <div className=''>
                <button style={{ color: 'white' }} className='btn btn-info mx-auto w-50 d-block mb-2'>
                    <span className='pe-2'>
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </span>
                    Sign In With Google 
                </button>
                <button className='btn btn-primary mx-auto w-50 d-block mb-2'>
                    <span className='pe-2'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </span>
                     Sign In With Facebook
                </button>
                <button className='btn btn-dark mx-auto w-50 d-block'>
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