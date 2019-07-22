import React from 'react';
import { connect } from 'dva';

const mapStateToProps = (state) => {
  const { number, time } = state.count;
  return {
    number,
    time,
  };
}

@connect(mapStateToProps)
class Count extends React.Component {
  add = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'count/add',
    });
  }
  minus = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'count/minus',
    });
  }
  delayadd = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'count/delayadd',
    });
  }
  delayminus = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'count/delayminus',
    });
  }
  settime = (time) => {
    const { dispatch } = this.props
    dispatch({
      type: 'count/settime',
      payload: { time }
    });
  }
  render(){
    const { number } = this.props;

    return (
    <div>
      <h2>{number}</h2>

      <h3>立刻加减</h3>
        <button key="add" onClick={this.add}>+</button>
        <button key="minus" onClick={this.minus}>-</button>
        <h3>延时<input style={{ width:'30px' }} onChange={ (e) => { this.settime(e.target.value); } } />秒加减</h3>
        <button key="add" onClick={this.delayadd}>+</button>
        <button key="minus" onClick={this.delayminus}>-</button>
    </div>
    )
  }
  
}

export default Count
