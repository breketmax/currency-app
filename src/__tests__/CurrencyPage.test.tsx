import { fireEvent, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import ConvertPage from '../pages/ConvertPage/ConvertPage';
import CurrencyPage from '../pages/CurrencyPage/CurrencyPage';

describe('Test Currency page', () => {
  test('change currency in page', () => {
    const routes = [
      {
        path: '/',
        element: <ConvertPage />,
      },
      {
        path: 'currency-rate',
        element: <CurrencyPage />,
      },
    ];
    const router = createMemoryRouter(routes, {
      initialEntries: [ '/', '/currency-rate', ],
      initialIndex: 1,
    });

    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    expect(screen.getByTestId('currency-select')).toBeInTheDocument();
    expect(screen.getByTestId('currency-select')).toContainHTML('RUB');
    fireEvent.click(screen.getByText('GBP'));
    expect(screen.getByTestId('currency-select')).toContainHTML('GBP');
  });
});
