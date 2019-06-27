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
  return (
    <CountUI add ={function(){add()}} minus={function(){minus()}} count={count}/>
  )
}

export default connect(({count}) => ({
  count,
}))(Index)
