import React from "react"
import { InputTasksForm } from "../InputTasksForm"

class InputTask extends React.Component {
    render() {
        return (
            <div>
                <div class="inputTaskTitle">
                    <input type="checkbox" class="taskChk" />
                    <input type="text" class="taskTitle" placeholder="Type Something Here…"  />
                    <i class="far fa-star fa-lg icon"></i>
                    <i class="fas fa-pen fa-lg icon icon_edit"></i>
                </div>
                <InputTasksForm closeAdd={this.props.closeAdd} />
            </div>)
    }
}

export { InputTask }