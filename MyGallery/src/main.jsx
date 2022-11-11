import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './css/style.scss';

// Страницы
import Root from './routes/root';
import ErrorPage from './routes/error-page.jsx';
import About from './routes/about.jsx';
import Contacts from './routes/contacts.jsx';
import Works from './routes/works.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <About />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/works',
                element: <Works />,
            },
            {
                path: '/contacts',
                element: <Contacts />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
