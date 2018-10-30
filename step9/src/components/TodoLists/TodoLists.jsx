import React from "react"
import { connect } from "react-redux"
import { List } from "../List"

class ConnectTodoLists extends React.Component {
    render() {
        //先排序
        this.props.data
            .sort((f, s) => { return f.important < s.important ? 1 : -1 })
            .sort((f, s) => { return f.complete > s.complete ? 1 : -1 })

        let Lists = this.props.data.map((item) => {
            return <List key={item.id} listData={item} />
        })

        let todoCount = 0
        this.props.data.map((item)=>{if(!item.complete){todoCount++}})

        return (
            <div>
                <div>
                    {Lists}
                </div>
                <div class="countText">
                    <span>{todoCount} tasks left</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { data: state }
}

const TodoLists = connect(mapStateToProps)(ConnectTodoLists)


export { TodoLists }