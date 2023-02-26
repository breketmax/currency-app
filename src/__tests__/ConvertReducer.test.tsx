import { render } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../utils/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import convertSlice, {
  setAmount,
  setFrom,
  setTo,
  swapCurriences
} from '../store/reducers/ConvertSlice';

const initialState = {
  info: {
    quote: 0,
    timestamp: 0,
  },
  query: {
    amount: 0,
    from: 'RUB',
    to: 'USD',
  },
  result: 0,
  success: false,
  isConvertError: '',
  isConvertLoading: false,
  isConvertSuccess: false,
};

describe('Test convert reducer actions', () => {
  test('test set to currency', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    expect(convertSlice(initialState, setTo('RUB'))).toEqual({
      ...initialState,
      query: { ...initialState.query, to: 'RUB', },
    });
  });
  test('test set from currency', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    expect(convertSlice(initialState, setFrom('USD'))).toEqual({
      ...initialState,
      query: { ...initialState.query, from: 'USD', },
    });
  });
  test('test set amount currency', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    expect(convertSlice(initialState, setAmount(123))).toEqual({
      ...initialState,
      query: { ...initialState.query, amount: 123, },
    });
  });
  test('test swapping currencies', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    expect(convertSlice(initialState, swapCurriences())).toEqual({
      ...initialState,
      query: { ...initialState.query, from: 'USD', to: 'RUB', },
    });
  });
});
