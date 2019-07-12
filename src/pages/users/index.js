import React from 'react'
import { Table, Pagination } from 'antd'
import { connect } from 'dva'

function mapStatetoProps(state) {
    const { list, total, page, size } = state.users;
    return {
        list, total, page, size,
    };
}


class Users extends React.Component{

    constructor(props){
        super(props);
        this.usersFetch(1, 3)
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

    onShowSizeChange = (page, size) => {
        this.usersFetch(page, size)
      }

    


    render(){

        const { loading, list, total, page, size } = this.props
        const pageSizeOptions = [ '3', '5', '10' ]
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

                <Pagination
                showSizeChanger
                pageSizeOptions = {pageSizeOptions}
                onShowSizeChange = {this.onShowSizeChange}
                total={total}
                current={page}
                pageSize={size}
                onChange={(page,size)=>{this.usersFetch(page, size)}}
                />

            </div>
        )
    }
}

export default connect(mapStatetoProps)(Users)