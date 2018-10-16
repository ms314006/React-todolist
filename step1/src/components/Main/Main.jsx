import React from "react"
import { HashRouter } from "react-router-dom"
import { TopBlock } from "../TopBlock"

class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <TopBlock />
            </HashRouter>
        )
    }
}

export { Main }