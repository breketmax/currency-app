import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ICurrencyRate } from '../../types/ICurrencyRate';
import { fetchCurrencyRate } from './ActionCreator';

interface ICourseRate extends ICurrencyRate {
  isCourseRateSuccess: boolean
  isCourseRateLoading: boolean
  isCourseRateError: string
}

const initialState: ICourseRate = {
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

const currencyRateSlice = createSlice({
  initialState,
  name: 'courseRateSlice',
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrencyRate.pending, (state) => {
        state.isCourseRateLoading = true;
        state.isCourseRateError = '';
        state.isCourseRateSuccess = false;
      })
      .addCase(
        fetchCurrencyRate.fulfilled,
        (state, action: PayloadAction<ICurrencyRate>) => {
          state.isCourseRateLoading = false;
          state.isCourseRateError = '';
          state.isCourseRateSuccess = true;
          state.timestamp = action.payload.timestamp;
          state.success = action.payload.success;
          state.source = action.payload.source;
          state.quotes = action.payload.quotes;
        }
      )
      .addCase(fetchCurrencyRate.rejected, (state, action) => {
        state.isCourseRateLoading = false;
        state.isCourseRateError = action.payload ?? 'Something goes wrong.';
        state.isCourseRateSuccess = false;
      });
  },
});

export default currencyRateSlice.reducer;
