import { render } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../utils/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import currencyRateSlice from '.././store/reducers/CurrencyRateSlice';
import { fetchCurrencyRate } from '../store/reducers/ActionCreator';
import { type AnyAction } from '@reduxjs/toolkit';

const initialState = {
  isCourseRateError: '',
  isCourseRateLoading: false,
  isCourseRateSuccess: false,
  quotes: {
    RUBRUB: 1,
  },
  source: '',
  success: false,
  timestamp: 0,
};
const fetchCurrencyState = {
  quotes: {
    RUBAED: 0.048321,
    RUBAUD: 0.019559,
    RUBCNY: 0.09151,
    RUBEUR: 0.012429,
    RUBGBP: 0.011012,
    RUBJPY: 1.795501,
    RUBKZT: 5.904626,
    RUBUAH: 0.483197,
    RUBUSD: 0.013155,
  },
  source: 'RUB',
  success: true,
  timestamp: 1677430683,
};
describe('Test currency reducer actions', () => {
  test('is currency data loading', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const action: AnyAction = { type: fetchCurrencyRate.pending.type, };
    expect(currencyRateSlice(initialState, action)).toEqual({
      ...initialState,
      isCourseRateLoading: true,
    });
  });
  test('is currency data error', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const action: AnyAction = {
      type: fetchCurrencyRate.rejected.type,
      payload: 'Something goes wrong',
    };
    expect(currencyRateSlice(initialState, action)).toEqual({
      ...initialState,
      isCourseRateError: 'Something goes wrong',
    });
  });
  test('is currency data success', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    const action: AnyAction = {
      type: fetchCurrencyRate.fulfilled.type,
      payload: fetchCurrencyState,
    };
    expect(currencyRateSlice(initialState, action)).toEqual({
      ...fetchCurrencyState,
      isCourseRateSuccess: true,
      isCourseRateError: '',
      isCourseRateLoading: false,
    });
  });
});
