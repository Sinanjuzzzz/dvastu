import React from 'react'
import { Table, Pagination, Row, Col } from 'antd'
import { connect } from 'dva'

import UserSearch from '@/components/UserSearch'


const mapStatetoProps = (state) => {
	const { list, total, page, size } = state.users;
	return {
		list, total, page, size,
	};
}


class Users extends React.Component {

	constructor(props) {
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

	modChange = (value) => {
		this.setState({ queryMode: value })
	}




	render() {

		const { loading, list, total, page, size } = this.props
		const pageSizeOptions = ['3', '5', '10']
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

		const { queryMode } = this.state

		return (
			<div>

				<UserSearch
					queryMode={queryMode}
					queryUser={this.queryUser}
					modChange={this.modChange}
					fetchUsersList={this.fetchUsersList}
				/>

				<Row type="flex" justify="center">
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
							pageSizeOptions={pageSizeOptions}
							onShowSizeChange={this.onShowSizeChange}
							total={total}
							current={page}
							pageSize={size}
							onChange={this.fetchUsersList}
						/>
					</Col>
				</Row>

			</div>
		)
	}
}

export default connect(mapStatetoProps)(Users)