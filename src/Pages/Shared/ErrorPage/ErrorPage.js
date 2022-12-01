import React, { useContext } from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const ErrorPage = () => {
    const error = useRouteError();
    const {userSignOut} = useContext(AuthContext);
    const userLogOut = () => {
        userSignOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <p className='text-2xl text-red-500'>Something Went Wrong</p>
            <p className='text-1xl text-red-500'>{error.statusText || error.message}</p>
            <Link to="/"><button className='btn btn-primary' onClick={userLogOut}>SignOut</button></Link>
        </div>
    );
};

export default ErrorPage;