import { fireEvent, render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../../utils/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Test Convert page', () => {
  test('Disabled input', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const disInput = screen.getByTestId('disabled-input');
    expect(disInput).toBeInTheDocument();
    expect(disInput).toBeDisabled();
  });
  test('is dropdown showed and hide by click', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const toSelect = screen.getByTestId('to-select');
    expect(screen.getByTestId('to-select-dropdown')).toHaveAttribute('hidden');
    fireEvent.click(toSelect);
    expect(screen.getByTestId('to-select-dropdown')).not.toHaveAttribute(
      'hidden'
    );

    const fromSelect = screen.getByTestId('from-select');
    expect(screen.getByTestId('from-select-dropdown')).toHaveAttribute(
      'hidden'
    );
    fireEvent.click(fromSelect);
    expect(screen.getByTestId('from-select-dropdown')).not.toHaveAttribute(
      'hidden'
    );
  });
  test('From input in document and contain only numbers', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const fromInput = screen.getByTestId('from-input');
    expect(fromInput).toBeInTheDocument();
    expect(fromInput).toHaveValue('0');
    fireEvent.change(fromInput, {
      target: {
        value: '123',
      },
    });
    expect(fromInput).toHaveValue('123');
    fireEvent.change(fromInput, {
      target: {
        value: '123d/././,/.,./,/.,./,./,',
      },
    });
    expect(fromInput).toHaveValue('123');
  });
  test('Swap currencies after button click', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    expect(screen.getByTestId('from-select')).toContainHTML('RUB');
    expect(screen.getByTestId('to-select')).toContainHTML('USD');
    const swapBtn = screen.getByTestId('swap-btn');
    fireEvent.click(swapBtn);
    expect(screen.getByTestId('from-select')).toContainHTML('USD');
    expect(screen.getByTestId('to-select')).toContainHTML('RUB');
  });
  test('change from currency from dropdown', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    expect(screen.getByTestId('from-select')).toContainHTML('USD');
    const anotherCur = screen.getAllByText('GBP');
    fireEvent.click(anotherCur[0]);
    expect(screen.getByTestId('from-select')).toContainHTML('GBP');
  });
});
