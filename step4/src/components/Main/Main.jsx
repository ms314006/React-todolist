import React from "react"
import { HashRouter,Route } from "react-router-dom"
import { TopBlock } from "../TopBlock"
import { MyTasks } from "../MyTasks"
import {todoListStore} from "../../store"
import {addTodoList} from "../../actions"

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <TopBlock />
                    <Route exact path="/" component={MyTasks} />
                </div>
            </HashRouter>
        )
    }
}

window.store = todoListStore
window.addTodlList = addTodoList

export { Main }