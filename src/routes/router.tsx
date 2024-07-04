import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '@/App';
import Home from '@pages/Home';
import Theme from '@pages/Theme';
import { ROUTES } from './constants';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.THEME,
        element: <Theme />,
      },
    ],
  },
]);
