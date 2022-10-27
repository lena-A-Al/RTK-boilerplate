import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './gameSlice';
export const store = configureStore({
  reducer: {
    name: gameReducer,
    //THIS IS THE ENTRY POINT OF OUR REDUX STORE
    //REDUCERS GO HERE
  },
});
