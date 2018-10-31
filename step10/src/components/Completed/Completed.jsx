import React from "react"
import {TodoLists} from "../TodoLists"

class Completed extends React.Component{
    render(){
        return (
            <div class="InputTasksForm">
                <TodoLists page="completed" />
            </div>
        )
    }
}

export { Completed }