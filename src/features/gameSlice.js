import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  points: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addPoint: (state) => {
      state.points += 1;
    },
  },
});

export const { addPoint } = gameSlice.actions;
// we can export our slice here and connect it to our store.
export default gameSlice.reducer;
