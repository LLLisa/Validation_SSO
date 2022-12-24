import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Routes } from './components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login, SignUp } from './forms';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Routes />,
        errorElement: <p>404?</p>,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'signup',
                element: <SignUp />,
            },
        ],
    },
]);

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(<RouterProvider router={router} />);
