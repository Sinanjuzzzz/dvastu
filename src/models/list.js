export default {
    namespace: 'list',
        state:{
            list1:[ '5', '4', '3' ],
            list2:[ '1', '2', '6' ],
        },
    reducers: {
        list1pop ( state, { payload: { popItem } } ){
            const { list1, list2 } = state
            list1.splice(list1.indexOf(popItem), 1)
            list2.push(popItem)
            return { list1: list1, list2: list2 }
        },
        list2pop ( state, { payload: { popItem } } ){
            const { list1, list2 } = state
            list2.splice(list2.indexOf(popItem), 1)
            list1.push(popItem)
            return { list1: list1, list2: list2 }
        }
    },
}