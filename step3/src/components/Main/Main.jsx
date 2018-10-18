import React from "react"
import { HashRouter,Route } from "react-router-dom"
import { TopBlock } from "../TopBlock"
import { MyTasks } from "../MyTasks"

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

export { Main }