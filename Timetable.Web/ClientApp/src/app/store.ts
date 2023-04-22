import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import allowLogin from '../features/Reducers/authSlice';
import changesidebarReducer from '../features/Reducers/rtlSlice';
import * as WeatherForecasts from '../features/Reducers/weatherforcast';
import languageReducer from '../features/Reducers/languageSlice'

export const store = configureStore({
  reducer: {
    isloggedin: allowLogin,
    weatherForecasts: WeatherForecasts.reducer,
    language: languageReducer,
    changeSidebar:changesidebarReducer
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
