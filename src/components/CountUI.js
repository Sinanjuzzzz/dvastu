import React from 'react';
const CountUI = ({ add, minus, delayadd, delayminus, settime, number, time }) => {
  return (
    <div>
      <h2>{number}</h2>

      <h3>立刻加减</h3>
        <button key="add" onClick={add}>+</button>
        <button key="minus" onClick={minus}>-</button>
        <h3>延时<input style={{ width:'30px' }} onChange={ (e) => { settime(e.target.value); } } />秒加减</h3>
        <button key="add" onClick={delayadd}>+</button>
        <button key="minus" onClick={delayminus}>-</button>
    </div>
  );
}

export default CountUI
