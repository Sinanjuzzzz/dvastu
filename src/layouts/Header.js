import React from 'react';
import { Menu, Icon } from 'antd';
import Link from 'umi/link';
import withRouter from 'umi/withRouter';

function Header({ location }) {
  return (
    <Menu selectedKeys={[location.pathname]} mode="horizontal" theme="dark">
      <Menu.Item key="/users">
        <Link to="/users">
          <Icon type="user" />Users
        </Link>
      </Menu.Item>
      <Menu.Item key="/list">
        <Link to="/list">
          <Icon type="ordered-list" />List
        </Link>
      </Menu.Item>
      <Menu.Item key="/count">
        <Link to="/count">
          <Icon type="number" />Count
        </Link>
      </Menu.Item>
      <Menu.Item key="/deletelist">
        <Link to="/deletelist">
          <Icon type="compass" />快速上手demo
        </Link>
      </Menu.Item>
      <Menu.Item key="/todos">
        <Link to="/todos">
        <Icon type="schedule" />ToDos
        </Link>
      </Menu.Item>
    </Menu>
  );
}

export default withRouter(Header);
