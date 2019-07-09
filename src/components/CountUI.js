import React from 'react';
const CountUI = ({ add, minus, delayadd, delayminus, count }) => {
  return (
    <div>
      <h2>{count}</h2>
      <p>
        <h3>立刻加减</h3>
        <button key="add" onClick={add}>+</button>
        <button key="minus" onClick={minus}>-</button>
      </p>
      <p>
        <h3>延时1s加减</h3>
        <button key="add" onClick={delayadd}>+</button>
        <button key="minus" onClick={delayminus}>-</button>
      </p>
    </div>
  );
}

export default CountUI
