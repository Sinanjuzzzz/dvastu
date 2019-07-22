import React from 'react';
import { connect } from 'dva';

const mapStateToProps = (state) => {
	const { list1, list2 } = state.list;
	return {
		list1,
		list2,
	};
}
@connect(mapStateToProps)
class List extends React.Component {

	list1pop = (popItem) => {
		const { dispatch } = this.props
		dispatch({
			type: 'list/list1pop',
			payload: { popItem },
		})
	}

	list2pop = (popItem) => {
		const { dispatch } = this.props
		dispatch({
			type: 'list/list2pop',
			payload: { popItem },
		})
	}
	render() {
		const { list1, list2 } = this.props;
		return (
			<div>
				<h3>List1</h3>
				{
					list1.map((item, key) => {
						return (
							<div key={item} id={item} onClick={(e) => { this.list1pop(e.target.id); this.forceUpdate() }} >
								{item}
							</div>
						)
					})
				}
				<h3>list2</h3>
				{
					list2.map((item, key) => {
						return (
							<div key={item} id={item} onClick={(e) => { this.list2pop(e.target.id); this.forceUpdate() }} >
								{item}
							</div>
						)
					})
				}
			</div>
		);
	}

};

export default List