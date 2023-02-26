import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
// import { router } from '../utils/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
// import userEvent from '@testing-library/user-event';
import CurrencyPage from '../pages/CurrencyPage/CurrencyPage';
import ConvertPage from '../pages/ConvertPage/ConvertPage';
import Error from '../components/Error/Error';

describe('Test routing', () => {
  test('Change page', async () => {
    const routes = [
      {
        path: '/',
        element: <ConvertPage />,
      },
      {
        path: 'currency-rate',
        element: <CurrencyPage />,
      },
      {
        path: 'lol',
        element: <Error>What are you doing here?</Error>,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: [ '/', '/currency-rate', '/lol', ],
      initialIndex: 2,
    });
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    // const user = userEvent.setup();
    // expect(screen.getByTestId('from-select')).toBeInTheDocument();
    // await act(async () => {
    //   await user.click(screen.getByText(/currency rate/i));
    // });
    // expect(screen.getByTestId('currency-select')).toBeInTheDocument();
    // await act(async () => {
    //   await user.click(screen.getByText(/convert currency/i));
    // });
    // expect(screen.getByTestId('from-select')).toBeInTheDocument();
    expect(screen.getByTestId('error')).toBeInTheDocument();
  });
});
