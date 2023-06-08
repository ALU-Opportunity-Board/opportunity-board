import { createSlice } from '@reduxjs/toolkit';

interface oppState {
  value: any | null;
  filter: any | null;
}

const initialState: oppState = {
  value: [],
  filter: '',
};

const oppSlice = createSlice({
  name: 'Opp',
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
