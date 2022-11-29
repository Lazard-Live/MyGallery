import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './lib.scss';

import Root from './routes/root/root.jsx';

// Страницы
import About from './routes/about/about.jsx';
import Contacts from './routes/contacts/contacts.jsx';
import Works from './routes/works/works.jsx';
import ErrorPage from './routes/error-page/404.jsx';
import Uikit from "./routes/uikit/uikit";

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
            {
                path: '/uikit',
                element: <Uikit />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
