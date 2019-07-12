import ListComponents from '../../components/list'
import { connect } from 'dva';

function mapStateToProps(state) {
    const { list1, list2 } = state.list;
    return {
        list1,
        list2,
    };
}

const List = ({ dispatch, list1, list2 }) => {

    function list1pop( popItem ) {
        dispatch({
            type: 'list/list1pop',
            payload: { popItem },
        }) 
    }

    function list2pop( popItem ) {
        dispatch({
            type: 'list/list2pop',
            payload: { popItem },
        }) 
    }

    return (
        <ListComponents list1={list1} list2={list2} list1pop={(popItem) => list1pop(popItem)} list2pop={(popItem) => list2pop(popItem)} />
    );
};

export default connect(mapStateToProps)(List)