import React from 'react'
import { Table, Pagination, Row, Col, Input, Select } from 'antd'
import { connect } from 'dva'

const { Search } = Input
const { Option } = Select;

function mapStatetoProps(state) {
    const { list, total, page, size } = state.users;
    return {
        list, total, page, size,
    };
}


class Users extends React.Component{

    constructor(props){
        super(props);
        this.fetchUsersList(1, 3);
        this.state = {
            queryMode: 'id',
        };
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

    queryUser = (queryMode, queryValue) => {
        const { dispatch } = this.props;
        dispatch({
            type: 'users/queryUser',
            payload: {
                queryMode, 
                queryValue,
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
                <Col>
                <Select
                showSearch
                style={{ width: 100 }}
                placeholder="查询方式"
                optionFilterProp="children"
                filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={option => {this.setState({ queryMode:option })}}
                >
                <Option value="id">ID</Option>
                <Option value="name">Name</Option>
                <Option value="username">UserName</Option>
                </Select>
                </Col>

                <Col span={10} >
                <Search
                placeholder={"输入"+this.state.queryMode}
                enterButton="Search"
                size="default"
                onSearch={value => this.queryUser(this.state.queryMode,value)}
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