import { createSlice } from '@reduxjs/toolkit';

interface oppState {
  value: any | null;
}

const initialState: oppState = {
  value: [],
};

const oppSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setOpportunities: (state, action) => {
      state.value = action.payload;
    },
    addOpportunities: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
  },
});

export const { setOpportunities, addOpportunities } = oppSlice.actions;
export default oppSlice.reducer;
