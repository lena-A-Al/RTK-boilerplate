import React, { useEffect } from 'react';
import Game from './components/Game';
import { updateName } from './features/playerSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  //customs hooks:
  const dispatch = useDispatch();
  //selector
  const playerName = useSelector((state) => state.player.username);

  useEffect(() => {
    //grab out username from localStorage
    const username = localStorage.getItem('clicker_username');
    dispatch(updateName(username));
  });

  //handlers:
  const handlerNameChange = (event) => {
    console.log(updateName(event.target.value));
    dispatch(updateName(event.target.value));
    //using localStorage to store our data without using databases whenever we write name.
    localStorage.setItem('clicker_username', event.target.value);
  };

  //VIEWS:
  return (
    <div className="App">
      <header className="App-header">
        <h1>Player Name: {playerName}</h1>
        {/* this is going to be a user input data */}
        <input
          // name={playerName}
          type="text"
          value={playerName}
          onChange={handlerNameChange}
        ></input>
        <Game />
      </header>
    </div>
  );
}

export default App;
