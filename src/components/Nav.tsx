import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <Link to={'/'}>home</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/signUp'}>SignUp</Link>
        </nav>
    );
};

export default Nav;
