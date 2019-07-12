import React from 'react';
import { connect } from 'dva';
import CountUI from '../../components/CountUI';

const Index = ({ dispatch, number, time }) => {
  function add() {
    dispatch({
      type: 'count/add',
    });
  }
  function minus() {
    dispatch({
      type: 'count/minus',
    });
  }
  function delayadd() {
    dispatch({
      type: 'count/delayadd',
    });
  }
  function delayminus() {
    dispatch({
      type: 'count/delayminus',
    });
  }
  function settime( time ) {
    console.log('connect, '+time)
    dispatch({
      type: 'count/settime',
      payload: { time }
    });
  }
  return (
    <CountUI add={() => add()} minus={() => minus()} delayadd={() => delayadd()} delayminus={() => delayminus()} settime={(time) => settime(time)} number={number} time={time} />
  )
}

function mapStateToProps(state) {
  const { number, time } = state.count;
  return {
    number,
    time,
  };
}

export default connect(mapStateToProps)(Index)
