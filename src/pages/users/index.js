import React from 'react'
import { Table } from 'antd'
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
        this.usersFetch(1,3);
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
        const { list, loading } = this.props

        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Email',
              dataIndex: 'email',
              key: 'email',
            },
            {
              title: 'Website',
              dataIndex: 'website',
              key: 'website',
            },
        ]

        return(
            <div>
                <Table
                columns={columns}
                dataSource={list}
                loading={loading}
                rowKey={record => record.id}
                pagination={false}
                />
            </div>
        )
    }
}

export default connect(mapStatetoProps)(Users)