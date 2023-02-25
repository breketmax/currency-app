import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type IQuery, type IConvert } from '../../types/IConvert';

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
