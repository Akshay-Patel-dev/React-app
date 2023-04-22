import {  createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface IsLoggedIn {
  isloggedin: boolean;
}

const initialState: IsLoggedIn = {
  isloggedin: false,
};

export const isLoggedInSlice = createSlice({
  name: 'loggedin',
  initialState,
  reducers: {
    allowLogin: (state) => {
      state.isloggedin = true;
    },
  },
});

export const { allowLogin } = isLoggedInSlice.actions;

export const selectIsLoggedIn = (state: RootState) => state.isloggedin.isloggedin;

export default isLoggedInSlice.reducer;
