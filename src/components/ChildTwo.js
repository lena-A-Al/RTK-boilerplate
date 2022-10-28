import React from 'react';
import ChildThree from './ChildThree';

const ChildTwo = ({addPoints}) => {
  return (
    <>
      <ChildThree addPoints={addPoints}/>
    </>
  );
};

export default ChildTwo;
