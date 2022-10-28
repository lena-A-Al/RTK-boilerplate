import React from 'react';
import ChildTwo from './ChildTwo';

const ChildOne = ({ addPoints }) => {
  return (
    <>
      <ChildTwo addPoints={addPoints} />
    </>
  );
};

export default ChildOne;
