import React from 'react';
import Main from './Main';
import { Outlet, Link } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <div>Header</div>
            <nav>Nav</nav>
            <h1>Routes</h1>
            <Main />
            <Link to={'/'}>home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signUp'}>SignUp</Link>
            <Outlet />
            <footer>footer</footer>
        </div>
    );
};

export default Routes;
