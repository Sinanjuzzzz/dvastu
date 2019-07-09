export default {
  namespace: 'count',
    state: {
      number: 0,
      time: 1,
    },
  reducers: {
  'add'  (state) { const { number } = state; return { number: number+1 } },
  'minus' (state) { const { number } = state; return { number: number-1 } },
  'settime' (state, { payload: { time } }){ time = (time === '') ? 1:time; return { ...state, time } }
  },
  effects: {
    *delayadd( action, { call, put, select } ){
      const time = yield select((state)=>state.count.time )
      yield call(delay,time*1000);
      yield put({ type: 'add' })
    },
    *delayminus( action, { call, put, select } ){
      const time = yield select((state)=>state.count.time )
      yield call(delay,time*1000);
      yield put({ type: 'minus' })
    }
  }
}

function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}