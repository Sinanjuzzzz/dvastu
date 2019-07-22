import React from 'react'
import { connect } from 'dva'
import { Icon, Descriptions, Row, Col, Collapse } from 'antd';
const { Panel } = Collapse;

const mapStatetoProps = (state) => {
  const { list, total, page, size } = state.todos;
  return {
    list, total, page, size,
  };
}

@connect(mapStatetoProps)
class ToDoCards extends React.Component {

  constructor(props) {
    super(props);
    this.fetchToDosList(1, 3)

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
    const { list } = this.props
    return (
      <Row type="flex" justify="center" style={{ textAlign: "left" }}>
        <Col span={20}>
          <Collapse>
            <Panel key={1}>
              <Collapse defaultActiveKey="0">
                {
                  list.length ? (list.map(item =>
                    <Panel header={"id: "+item.id}>
                      <Descriptions bordered>
                        <Descriptions.Item label="ID">{item.id}</Descriptions.Item>
                        <Descriptions.Item label="UserID">{item.userId}</Descriptions.Item>
                        <Descriptions.Item label="Title">{item.title}</Descriptions.Item>
                        <Descriptions.Item label="completed">{item.completed ? <Icon type="check" /> : <Icon type="close" />}</Descriptions.Item>
                      </Descriptions>
                    </Panel>
                  )) : null
                }
              </Collapse>

            </Panel>
          </Collapse>
        </Col>
      </Row>
    )
  }
}

export default ToDoCards