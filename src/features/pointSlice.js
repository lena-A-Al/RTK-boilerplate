import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  points: 0,
};

export const pointSlice = createSlice({
  name: 'game',
  initialState,
  reducers: [],
});

export const {} = pointSlice.actions;
// we can export our slice here and connect it to our store.
export default pointSlice.reducer;
