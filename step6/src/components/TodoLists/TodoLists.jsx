import React from "react"
import {connect} from "react-redux"
import {List} from "../List"

class ConnectTodoLists extends React.Component{
    render(){
        let Lists = this.props.data.map((item)=>{
            return <List key={item.id} listData = {item} />
        })

        return (
            <div>
                {Lists}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { data: state }       
}

const TodoLists = connect(mapStateToProps)(ConnectTodoLists)


export {TodoLists}