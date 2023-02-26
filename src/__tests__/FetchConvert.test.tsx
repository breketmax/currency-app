import { render } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../utils/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import convertSlice from '../store/reducers/ConvertSlice';
import { fetchConvert } from '../store/reducers/ActionCreator';
import { type AnyAction } from '@reduxjs/toolkit';

jest.mock('axios');

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
const fetchConvertState = {
  info: {
    rate: 0.013155,
    timestamp: 1677428822,
  },
  query: {
    amount: 1,
    from: 'RUB',
    to: 'USD',
  },
  result: 0.013155,
  success: true,
};
describe('Test convert reducer actions', () => {
  test('is convert data loading', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const action: AnyAction = { type: fetchConvert.pending.type, };
    expect(convertSlice(initialState, action)).toEqual({
      ...initialState,
      isConvertLoading: true,
    });
  });
  test('is convert data error', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const action: AnyAction = {
      type: fetchConvert.rejected.type,
      payload: 'Something goes wrong',
    };
    expect(convertSlice(initialState, action)).toEqual({
      ...initialState,
      isConvertError: 'Something goes wrong',
    });
  });
  test('is convert data success', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const action: AnyAction = {
      type: fetchConvert.fulfilled.type,
      payload: fetchConvertState,
    };
    expect(convertSlice(initialState, action)).toEqual({
      ...fetchConvertState,
      query: { ...initialState.query, },
      isConvertSuccess: true,
      isConvertError: '',
      isConvertLoading: false,
    });
  });
});
