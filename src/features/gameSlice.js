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
    buyFarm: (state) => {
      if (state.poin > 5) {
        state.point -= 5;
        state.farm += 1;
      }
    },
  },
});

//those are action creators
export const { setAddPoint, setSubstractPoint } = gameSlice.actions;
// we can export our slice here and connect it to our store.
export default gameSlice.reducer;
