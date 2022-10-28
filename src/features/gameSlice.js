import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  point: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setAddPoint: (state) => {
      state.point += 1;
    },
    setSubstractPoint: (state) => {
      state.point -= 1;
    },
  },
});

export const { setAddPoint, setSubstractPoint } = gameSlice.actions;
// we can export our slice here and connect it to our store.
export default gameSlice.reducer;
