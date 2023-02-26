import { render } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';
import { router } from '../utils/router';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import axios from 'axios';
import { type IConvertError, type IConvert } from '../types/IConvert';
import {
  fetchConvert,
  fetchCurrencyRate
} from '../store/reducers/ActionCreator';
import { type ICurrencyRate } from '../types/ICurrencyRate';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Test axios convert fetches', () => {
  let response: { data: IConvert };
  let error: IConvertError;
  beforeEach(() => {
    response = {
      data: {
        info: {
          quote: 0.013155,
          timestamp: 1677428822,
        },
        query: {
          amount: 1,
          from: 'RUB',
          to: 'USD',
        },
        result: 0.013155,
        success: true,
      },
    };
  });

  test('convert axios fetch success', async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    mockedAxios.get.mockResolvedValue(response);
    const { payload, } = await store.dispatch(
      fetchConvert({ amount: 1, from: 'RUB', to: 'USD', })
    );
    expect(payload).toEqual({ ...response.data, });
  });
  test('convert axios fetch error', async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    mockedAxios.get.mockRejectedValue(error);
    const { payload, } = await store.dispatch(
      fetchConvert({ amount: 1, from: '', to: '', })
    );
    expect(payload).toEqual(
      'Please, check the correctness of the data entered.'
    );
  });
});

describe('Test axios currencies fetches', () => {
  let response: { data: ICurrencyRate };
  let error: IConvertError;
  beforeEach(() => {
    response = {
      data: {
        quotes: {
          RUBAED: 0.048321,
          RUBAUD: 0.019559,
          RUBCNY: 0.09151,
          RUBEUR: 0.012429,
          RUBGBP: 0.011012,
          RUBJPY: 1.7955,
          RUBKZT: 5.904629,
          RUBUAH: 0.483197,
          RUBUSD: 0.013155,
        },
        source: 'RUB',
        success: true,
        timestamp: 1677434523,
      },
    };
  });

  test('convert axios fetch success', async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    mockedAxios.get.mockResolvedValue(response);
    const { payload, } = await store.dispatch(
      fetchCurrencyRate({
        currencies: 'AED, AUD, CNY, GBP, JPY, KZT,RUB, UAH, USD, EUR',
        source: 'RUB',
      })
    );
    expect(payload).toEqual({ ...response.data, });
  });
  test('convert axios fetch error', async () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );
    mockedAxios.get.mockRejectedValue(error);
    const { payload, } = await store.dispatch(
      fetchCurrencyRate({
        currencies: 'AED, AUD, CNY, GBP, JPY, KZT,RUB, UAH, USD, EUR',
        source: '',
      })
    );
    expect(payload).toEqual('Something goes wrong');
  });
});
