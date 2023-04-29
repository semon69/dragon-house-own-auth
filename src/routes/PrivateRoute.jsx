import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Spinner className=' mt-5' animation="border" role="status">
            <span className="visually-hidden text-center">Loading...</span>
        </Spinner>
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate>
};

export default PrivateRoute;