import {  PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type sidebarPosition = 'ltr' | 'rtl';

type sidebarPostionState = {
  sidebarPostion:sidebarPosition
}

const initialState: sidebarPostionState = {
    sidebarPostion: 'ltr',
};



export const changeSidebarSlice = createSlice({
  name: 'sidebarPosition',
  initialState,
  reducers: {
    changeSidebarPostion: (state,action:PayloadAction<sidebarPosition>) => {
      state.sidebarPostion = action.payload;
    },
  },
});

export const { changeSidebarPostion } = changeSidebarSlice.actions;

export const selecSidebar = (state: RootState) => state.changeSidebar.sidebarPostion;

export default changeSidebarSlice.reducer;
