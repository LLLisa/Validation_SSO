import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <h1>Main</h1>
            <Link to={'/'}>home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signUp'}>SignUp</Link>
            <Outlet />
        </>
    );
};

export default Main;
