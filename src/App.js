import React, { useState, useEffect } from 'react';
import Game from './components/Game';
import { updateName } from './features/playerSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  //states
  const [name, setName] = useState('');
  //customs hooks:
  const dispatch = useDispatch();
  //selector
  const playerName = useSelector((state) => state.player.username);

  useEffect(() => {
    //grab out username from localStorage
    const username = localStorage.getItem('clicker_username');
    setName(username);
    dispatch(updateName(username));
  });

  //handlers:
  const handlerNameChange = (event) => {
    // console.log(updateName(event.target.value));
    // dispatch(updateName(event.target.value));
    // //using localStorage to store our data without using databases whenever we write name.
    // localStorage.setItem('clicker_username', event.target.value);

    setName(event.target.value);
  };

  const handleSubmitName = (event) => {
    event.preventDefault();
    dispatch(updateName(name));
    localStorage.setItem('clicker_username', name);
  };

  //VIEWS:
  return (
    <div className="App">
      <header className="App-header">
        <h1>Player Name: {playerName}</h1>
        {/* this is going to be a user input data */}
        <form onSubmit={handleSubmitName}>
          <input
            // name={playerName}
            type="text"
            value={playerName}
            onChange={handlerNameChange}
          ></input>
        </form>
        <Game />
      </header>
    </div>
  );
}

export default App;
