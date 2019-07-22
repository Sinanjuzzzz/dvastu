import React from 'react'
import { Row, Col, Button, Select, Input } from 'antd'

const { Search } = Input
const { Option } = Select;

class UserSearch extends React.Component {



  render() {  

    const {modChange, queryMode,queryUser, fetchUsersList} = this.props

    return (
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
            onChange={option => { modChange(option) }}
          >
            <Option value="id">ID</Option>
            <Option value="name">Name</Option>
            <Option value="username">UserName</Option>
          </Select>
        </Col>

        <Col span={10} >
          <Search
            placeholder={"输入" + queryMode}
            enterButton="Search"
            size="default"
            onSearch={value => queryUser(queryMode, value)}
            allowClear
          />
        </Col>

        <Col>
          <Button type="danger" onClick={() => { fetchUsersList(1, 3) }} >还原</Button>
        </Col>

      </Row>
    )
  }
}

export default UserSearch;