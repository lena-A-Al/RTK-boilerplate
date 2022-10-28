import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddPoint, setSubstractPoint } from './features/gameSlice';

function App() {
  //customs hooks:
  const dispatch = useDispatch();
  //STATES
  // const [points, setPoints] = useState(0);

  //redux state-useSelector
  const points = useSelector((state) => state.game?.point);

  //ACTIONS:
  const addPointsHandler = () => {
    //loca state
    // setPoints(points + 1);
    //redux state
    dispatch(setAddPoint());
  };

  //VIEWS:
  return (
    <div className="App">
      <header className="App-header">
        <img
          onClick={addPointsHandler}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1>Add Points: {points}</h1>
        <h1>Hello</h1>
      </header>
    </div>
  );
}

export default App;
