import React from 'react'
import { connect } from 'dva'
import { Icon, Descriptions, Row, Col, Collapse, Spin } from 'antd';
const { Panel } = Collapse;

const mapStatetoProps = ({ todos, users, loading }) => {
  const { list: todosList, total, page, size } = todos;
  const { list: usersList, total: usersTotal } = users;
  return {
    todosList,
    usersList,
    total,
    usersTotal,
    page,
    size,
    todosLoading: loading.effects['todos/queryToDo'],
  };
}

@connect(mapStatetoProps)
class ToDoCards extends React.Component {
  constructor(props) {
    super(props);
    this.fetchUsersList(1, this.props.usersTotal)
  }

  fetchToDosList = (page, size) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'todos/fetchToDosList',
      payload: {
        page,
        size,
      }
    })
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

  queryToDo = (queryMode, queryValue) => {
    const { dispatch } = this.props;
    dispatch({
      type: 'todos/queryToDo',
      payload: {
        queryMode,
        queryValue,
      }
    })
  }

  render() {
    const { usersList, todosList, todosLoading } = this.props
    return (
      <Row type="flex" justify="center" style={{ textAlign: "left" }}>
        <Col span={20}>
          <Collapse accordion onChange={activeKey => this.queryToDo('userId', activeKey)}>
            {
              usersList.length ? (usersList.map(userItem =>
                <Panel key={userItem.id} header={userItem.name}>
                  <Spin spinning={todosLoading}>
                    <Collapse defaultActiveKey="0">
                      {
                        todosList.length ? (todosList.map(todoitem =>
                          <Panel header={"id: " + todoitem.id} key={todoitem.id}>
                            <Descriptions bordered>
                              <Descriptions.Item label="ID">{todoitem.id}</Descriptions.Item>
                              <Descriptions.Item label="UserID">{todoitem.userId}</Descriptions.Item>
                              <Descriptions.Item label="Title">{todoitem.title}</Descriptions.Item>
                              <Descriptions.Item label="completed">{todoitem.completed ? <Icon type="check" /> : <Icon type="close" />}</Descriptions.Item>
                            </Descriptions>
                          </Panel>
                        )) : null
                      }
                    </Collapse>
                  </Spin>
                </Panel>
              )) : null
            }

          </Collapse>
        </Col>
      </Row>
    )
  }
}

export default ToDoCards