import { configureStore } from '@reduxjs/toolkit';
//this will get the deafult export only
import gameReducer from './gameSlice';
export const store = configureStore({
  reducer: {
    name: gameReducer,
    //THIS IS THE ENTRY POINT OF OUR REDUX STORE
    //REDUCERS GO HERE
  },
});
