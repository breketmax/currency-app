import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IConvert } from '../../types/IConvert';
import { fetchConvert } from './ActionCreator';

interface IConvertSlice extends IConvert {
  isConvertSuccess: boolean
  isConvertLoading: boolean
  isConvertError: string
}

const initialState: IConvertSlice = {
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

const convertSlice = createSlice({
  initialState,
  name: 'convertSlice',
  reducers: {
    setTo (state, action: PayloadAction<string>) {
      state.query.to = action.payload;
    },
    setFrom (state, action: PayloadAction<string>) {
      state.query.from = action.payload;
    },
    setAmount (state, action: PayloadAction<number>) {
      state.query.amount = action.payload;
    },
    swapCurriences (state) {
      const temp = state.query.to;
      state.query.to = state.query.from;
      state.query.from = temp;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchConvert.pending, (state) => {
        state.isConvertLoading = true;
        state.isConvertError = '';
        state.isConvertSuccess = false;
      })
      .addCase(
        fetchConvert.fulfilled,
        (state, action: PayloadAction<IConvert>) => {
          state.info = action.payload.info;
          state.result = action.payload.result;
          state.success = action.payload.success;
          state.isConvertError = '';
          state.isConvertSuccess = true;
          state.isConvertLoading = false;
        }
      )
      .addCase(fetchConvert.rejected, (state, action) => {
        state.isConvertError = action.payload ?? 'Something goes wrong.';
        state.isConvertSuccess = false;
        state.isConvertLoading = false;
      });
  },
});

export default convertSlice.reducer;
export const { setFrom, setTo, setAmount, swapCurriences, } =
  convertSlice.actions;
