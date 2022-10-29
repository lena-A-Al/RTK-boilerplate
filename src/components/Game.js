import logo from '../logo.svg';
import '../App.css';
import react, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAddPoint, setSubstractPoint } from '../features/gameSlice';
import ChildOne from '../components/ChildOne';

const Game = () => {
  //STATES
  // const [points, setPoints] = useState(0);
  const [isRed, setRed] = useState(true);
  //customs hooks:
  const dispatch = useDispatch();

  //redux state-useSelector
  const addPoints = useSelector((state) => state.game?.point);

  const substractPoint = useSelector((state) => state.game.point);

  //ACTIONS:
  const addPointsHandler = () => {
    //loca state
    // setPoints(points + 1);
    //redux state
    console.log(setAddPoint());
    setRed(false);
    console.log(setAddPoint());
    dispatch(setAddPoint());
  };
  const substractHandler = () => {
    dispatch(setSubstractPoint());
  };
  return (
    <>
      <img
        onClick={addPointsHandler}
        src={logo}
        className="App-logo"
        alt="logo"
      />
      <h1 style={{ backgroundColor: isRed ? 'red' : '' }}>
        Add Points: {addPoints}
      </h1>
      <ChildOne addPoints={addPoints} />
      <button onClick={substractHandler}>
        substract Point: {substractPoint}
      </button>
    </>
  );
};

export default Game;
