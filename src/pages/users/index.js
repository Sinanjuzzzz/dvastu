import React from 'react'
import { Table, Pagination, Row, Col, Input } from 'antd'
import { connect } from 'dva'

const { Search } = Input

function mapStatetoProps(state) {
    const { list, total, page, size } = state.users;
    return {
        list, total, page, size,
    };
}


class Users extends React.Component{

    constructor(props){
        super(props);
        this.fetchUsersList(1, 3)
    }

    fetchUsersList = (page, size) => {
        const { dispatch } = this.props;
        dispatch({
            type: 'users/fetchUsersList',
            payload: {
                page,
                size,
            }
        }) 
    }

    queryUserbyId = (id) => {
        const { dispatch } = this.props;
        dispatch({
            type: 'users/queryUserbyId',
            payload: {
                id,
            }
        })
    }

    onShowSizeChange = (page, size) => {
        this.fetchUsersList(page, size)
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
                title: 'UserName',
                dataIndex: 'username',
                key: 'username',
            },
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
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
            {
                title: 'Phone',
                dataIndex: 'phone',
                key: 'phone',
            },
        ]

        return(
            <Row type="flex" justify="center" >
                <Col span={6} >
                <Search
                placeholder="输入ID"
                enterButton="Search"
                size="large"
                onSearch={value => this.queryUserbyId(value)}
                />
                </Col>

                <Col span={20} >
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
                onChange={this.fetchUsersList}
                /></Col>
                

            </Row>
        )
    }
}

export default connect(mapStatetoProps)(Users)