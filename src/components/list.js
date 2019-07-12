import React from 'react';


class List extends React.Component{

    render(){

        const { list1, list2, list1pop, list2pop } = this.props

        return (
        <div>
            <h3>List1</h3>
            {
                list1.map((item, key) => {
                    return (
                        <div key={item} id={item} onClick={(e) => {list1pop(e.target.id);this.forceUpdate()}} >
                            {item}
                        </div>
                    )      
                })
            }
            <h3>list2</h3>
            {
                list2.map((item, key) => {
                    return (
                        <div key={item} id={item} onClick={(e) => {list2pop(e.target.id);this.forceUpdate()}} >
                            {item}
                        </div>
                    )      
                })
            }
        </div>
            
        )
    }
}

export default List