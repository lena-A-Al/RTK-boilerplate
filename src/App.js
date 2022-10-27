import logo from './logo.svg';
import './App.css';
import react, { useState } from 'react';

function App() {
  //STATES
  const [points, setPoints] = useState(0);

  //ACTIONS:
  const addPointsHandler = () => {
    setPoints(points + 1);
  };
  console.log(points);
  console.log();

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
        <h1>Points: {points}</h1>
      </header>
    </div>
  );
}

export default App;
