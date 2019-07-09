import React from 'react';
import { connect } from 'dva';
import CountUI from '../../components/CountUI';

const Index = ({dispatch,count}) =>{
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
  return (
    <CountUI add={() => add()} minus={() => minus()} delayadd={() => delayadd()} delayminus={() => delayminus()} count={count}/>
  )
}

export default connect(({count}) => ({
  count,
}))(Index)
