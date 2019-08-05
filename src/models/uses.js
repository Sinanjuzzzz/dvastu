import * as usersServices from '@/services/users'

const initState = {
    list: [],
    total: null,
    page: null,
    size: null,
}

export default {
    namespace: 'users',
    state: initState,
    reducers: {
        save(state, { payload: { data: list, total, page, size } }) {
            return { ...state, list, total, page, size };
        },
        clear() {
            return { ...initState }
        }
    },
    effects: {
        *fetchUsersList({ payload: { page, size } }, { call, put }) {
            const { data, headers } = yield call(usersServices.queryUsersList, { page, size })
            yield put({
                type: 'save',
                payload: {
                    data,
                    total: parseInt(headers['x-total-count'], 10),
                    page: parseInt(page, 10),
                    size: size,
                }
            })
        },
        *queryUser({ payload: { queryMode, queryValue } }, { call, put }) {
            const { data } = yield call(usersServices.queryUser, { queryMode, queryValue })
            yield put({
                type: 'save',
                payload: {
                    data,
                    total: 1,
                    page: 1,
                    size: 1,
                }
            })
        }
    },
}