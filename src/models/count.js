export default{
  namespace: 'count',
    state: 0,
  reducers: {
  'add'  (state) { return state+1 },
  'minus' (state) { return state-1 },
},
  effects: {
    *delayadd( action, { call, put } ){
      yield call(delay,1000);
      yield put({ type: 'add' })
    },
    *delayminus( action, { call, put } ){
      yield call(delay,1000);
      yield put({ type: 'minus' })
    }
  }
}

function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}