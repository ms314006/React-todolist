import React from "react"
import { Route, Link } from "react-router-dom"

class BookMark extends React.Component {
    render() {
        return (
            <Route exact path={this.props.to}
                children={props => {
                let className = "bookMark"
                {props.match?className += " select_bookMark":className="bookMark"}
                return (
                    <Link to={this.props.to}>
                        <button class={className}>{this.props.name}</button>
                    </Link>
                )
            }} />
        )
    }
}

export { BookMark }