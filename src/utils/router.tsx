import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Error from '../components/Error/Error';
import ConvertPage from '../pages/ConvertPage/ConvertPage';
import CurrencyPage from '../pages/CurrencyPage/CurrencyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error>What are you doing here?</Error>,
    children: [
      {
        path: '/',
        element: <ConvertPage />,
      },
      {
        path: 'currency-rate',
        element: <CurrencyPage />,
      },
    ],
  },
]);
