import React from "react"
import {connect} from "react-redux"
import {List} from "../List"

class ConnectTodoLists extends React.Component{
    render(){
        let Lists = this.props.data.map((item)=>{
            console.log(item)
            return <List listData = {item} />
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