import {
  configureStore,
  type ThunkAction,
  type Action,
  combineReducers
} from '@reduxjs/toolkit';
import convertSlice from './reducers/ConvertSlice';

const rootReducer = combineReducers({
  convertSlice,
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>;
