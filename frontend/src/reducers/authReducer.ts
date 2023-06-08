/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface authState {
  isAuthenticated: boolean;
  authUser: any | null;
}

const initialState: authState = {
  isAuthenticated: false,
  authUser: null,
};

const AppSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
  },
});

export const { setIsAuthenticated, setAuthUser } = AppSlice.actions;
export default AppSlice.reducer;
