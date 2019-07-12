import React from 'react'
import { Form } from 'antd'
import { connect } from 'dva'

function mapStatetoProps(state) {
    const { list } = state.users;
    return {
        list
    };
}


class Users extends React.Component{

    constructor(props){
        super(props);
        this.usersFetch({ page:1, size:3 });
    }

    usersFetch = (page, size) => {
        const { dispatch } = this.props;
        dispatch({
            type:'users/fetch',
            payload :{
                page: page,
                size: size,
            }
        }) 
    }


    render(){
        const {list} = this.props
        return(
            <div>
                Users
            </div>
        )
    }
}

export default connect(mapStatetoProps)(Users)