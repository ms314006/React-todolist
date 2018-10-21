import React from "react"
import { Provider } from "react-redux"
import { HashRouter, Route } from "react-router-dom"
import { TopBlock } from "../TopBlock"
import { MyTasks } from "../MyTasks"
import { todoListStore } from "../../store"

class Main extends React.Component {
    render() {
        return (
            <Provider store={todoListStore}>
                <HashRouter>
                    <div>
                        <TopBlock />
                        <Route exact path="/" component={MyTasks} />
                    </div>
                </HashRouter>
            </Provider>
        )
    }
}

window.store = todoListStore

export { Main }