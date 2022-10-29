import { configureStore } from '@reduxjs/toolkit';
//this will get the deafult export only
import gameReducer from './gameSlice';
import playerReducer from './playerSlice';
export const store = configureStore({
  reducer: {
    game: gameReducer,
    player: playerReducer,
    //THIS IS THE ENTRY POINT OF OUR REDUX STORE
    //REDUCERS GO HERE
  },
});
