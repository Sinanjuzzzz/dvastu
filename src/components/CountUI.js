import React from 'react';
const CountUI = ({add,minus,count}) => {
  return (
    <div>
      <h2>{count}</h2>
      <button key="add" onClick={ add }>+</button>
      <button key="minus" onClick={ minus}>-</button>
    </div>
  );
}

export default CountUI
