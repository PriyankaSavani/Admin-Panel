import React from 'react'
import { Navigate } from 'react-router-dom';

// hooks
import useUser from '../hooks/useUser';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const loggedInUser = useUser();

    if (loggedInUser.email === null || loggedInUser.password === null) {
        return <Navigate to={{ pathname: '/auth/signin' }} />;
    }

    return <RouteComponent />;
}

export default PrivateRoute