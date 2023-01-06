import React from 'react';
import { Main, Header, Nav, Footer } from './index';
import { Outlet } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <Header />
            <Nav />
            <Main />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Routes;
