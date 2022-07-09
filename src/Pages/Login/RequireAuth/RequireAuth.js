import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading){
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div className='text-center pt-5'>
            <h3 className='text-danger'>Verified Your Email First</h3>
            <h5 className='text-success'>Go to your email address and verify email</h5>
            <p className='mt-3'>Did not get email? <button className='btn-link border-0 bg-white'>Sent verification email again</button></p>
        </div>
    }

    return children;
};

export default RequireAuth;