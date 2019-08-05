import React, { useState } from 'react';

function List() {

	const [list1, setList1] = useState(['1', '2', '3'])
	const [list2, setList2] = useState(['4', '5', '6'])

	function movetoList1(value) {
		let newlist = list2
		newlist.splice(list2.indexOf(value), 1)
		setList2(newlist)
		setList1(list1.concat([value]))
	}

	function movetoList2(value) {
		let newlist = list1
		newlist.splice(list1.indexOf(value), 1)
		setList1(newlist)
		setList2(list2.concat([value]))
	}

	return (
		<div>
			<h3>List1</h3>
			{
				list1 instanceof Array ? list1.map((item) => (
					<div key={item} id={item} onClick={(e) => { movetoList2(item); }} >
						{item}
					</div>
				)
				) : null
			}
			<h3>list2</h3>
			{
				list2 instanceof Array ? list2.map((item) => (
					<div key={item} id={item} onClick={(e) => { movetoList1(item); }} >
						{item}
					</div>
				)
				) : null
			}
		</div>
	);
}

export default List