import { queryUsers } from '../services/users'

export default {
    namespace: 'users',
    state: {
        list: [],
        total: null,
        page: null,
    },
    reducers:{
        save(state, { payload: { data: list, total, page } }){
            return { ...state, list, total, page };
        },
    },
    effects:{
        *fetch({ payload: { page, size } }, { call, put } ){
            const { data, headers } = yield call(queryUsers, { page,size } )
            yield put({
                type: 'save',
                payload: {
                    data,
                    total: parseInt(headers['x-total-count'], 10),
                    page: parseInt(page, 10),
                }
            })
        },
    },
}