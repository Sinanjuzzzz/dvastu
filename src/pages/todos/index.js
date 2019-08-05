import React, { useEffect } from 'react'
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

function ToDoCards(props) {
  const { usersTotal, usersList, todosList, todosLoading, dispatch } = props

  useEffect(() => {
    fetchUsersList(1, usersTotal)
    return () =>{dispatch({ type: "users/clear" })} 
  })

  // function fetchToDosList(page, size) {
  //   const { dispatch } = this.props;
  //   dispatch({
  //     type: 'todos/fetchToDosList',
  //     payload: {
  //       page,
  //       size,
  //     }
  //   })
  // }

  function fetchUsersList(page, size) {
    dispatch({
      type: 'users/fetchUsersList',
      payload: {
        page,
        size,
      }
    })
  }

  function queryToDo(queryMode, queryValue) {
    dispatch({
      type: 'todos/queryToDo',
      payload: {
        queryMode,
        queryValue,
      }
    })
  }

  return (
    <Row type="flex" justify="center" style={{ textAlign: "left" }}>
      <Col span={20}>
        <Collapse accordion onChange={activeKey => queryToDo('userId', activeKey)}>
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

export default connect(mapStatetoProps)(ToDoCards)
