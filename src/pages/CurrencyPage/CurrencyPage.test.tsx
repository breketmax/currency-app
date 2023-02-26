import { act, fireEvent, render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { router } from '../../utils/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import userEvent from '@testing-library/user-event';
import ConvertPage from '../ConvertPage/ConvertPage';
import CurrencyPage from './CurrencyPage';

describe('Test Currency page', () => {
  test('Change page', async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const user = userEvent.setup();
    expect(screen.getByTestId('from-select')).toBeInTheDocument();
    await act(async () => {
      await user.click(screen.getByText(/currency rate/i));
    });
    expect(screen.getByTestId('currency-select')).toBeInTheDocument();
  });
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
