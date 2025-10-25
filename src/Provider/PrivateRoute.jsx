import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user, userLoading} = use(AuthContext);
    const location = useLocation();
    
    // console.log(location);
    
    if(userLoading){
        return <Loading></Loading>;
    }
    
    if(user && user?.email){
        return children;
    }
    
    // Fixed: Pass the intended location in state
    return <Navigate to='/user/login' state={{ from: location }} replace />;
};

export default PrivateRoute;