import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// const ChildThree = ({ addPoints }) => {
//   return <div>Points:{addPoints}</div>;
// };


//passing state around using redux logic:
const ChildThree = () => {
  //selector:
  const points = useSelector((state) => state.game.point);
  return <div>Points:{points}</div>;
};

export default ChildThree;
