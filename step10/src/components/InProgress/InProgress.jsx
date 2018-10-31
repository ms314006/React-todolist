import React from "react"
import {TodoLists} from "../TodoLists"

class InProgress extends React.Component{
    render(){
        return (
            <div class="InputTasksForm">
                <TodoLists page="progress" />
            </div>
        )
    }
}

export { InProgress }