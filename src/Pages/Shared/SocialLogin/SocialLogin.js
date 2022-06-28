import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
                <p className='mx-3 mt-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
            </div>
            <div className=''>
                <button className='btn btn-primary mx-auto w-50 d-block'>
                    <span>
                        <FontAwesomeIcon icon="fa-brands fa-google" />
                        Google Sign In
                    </span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;