import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updateName: (state, action) => {
        //this is a valdation action. 
      if (action.payload.length > 8) return;
      state.username = action.payload;
    },
  },
});

//action creators:
export const { updateName } = playerSlice.actions;

//exporting the whole slice to the store.
export default playerSlice.reducer;
