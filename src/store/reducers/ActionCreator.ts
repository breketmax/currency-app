import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type IQuery, type IConvert } from '../../types/IConvert';
import { type ICurrencyRate, type IFetchRate } from '../../types/ICurrencyRate';

export const fetchConvert = createAsyncThunk<
IConvert,
IQuery,
{ rejectValue: string }
>('fetchConvert', async ({ amount, from, to, }, thunkAPI) => {
  try {
    const response = await axios.get(
      'https://api.apilayer.com/currency_data/convert',
      {
        params: {
          amount,
          from,
          to,
        },
        headers: {
          apikey: 'WkzwMIeQniL0ADiPwO1UglaJtBn1Y0ri',
        },
      }
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      'Please, check the correctness of the data entered.'
    );
  }
});

export const fetchCurrencyRate = createAsyncThunk<
ICurrencyRate,
IFetchRate,
{ rejectValue: string }
>('fetchCurrencyRate', async ({ currencies, source, }, thunkAPI) => {
  try {
    const response = await axios.get(
      'https://api.apilayer.com/currency_data/live',
      {
        params: {
          currencies,
          source,
        },
        headers: {
          apikey: 'WkzwMIeQniL0ADiPwO1UglaJtBn1Y0ri',
        },
      }
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something goes wrong');
  }
});
