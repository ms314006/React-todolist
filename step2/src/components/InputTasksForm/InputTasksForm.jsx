import React from "react"
import { InputName } from "../InputName"

class InputTasksForm extends React.Component {
    render() {
        return (
            <div class="InputTasksForm">
                <div class="InputTask">
                    <InputName className="fas fa-calendar-alt" inputName="Deadline" />
                    <div class="inputForm">
                        <input type="date" class="inputFont inputDateTime" />
                        &nbsp;&nbsp;
                        <input type="time" class="inputFont inputDateTime" />
                    </div>
                    <InputName className="fas fa-file" inputName="File" />
                    <div class="inputForm">
                        <input type="file" class="inputFont" />
                    </div>
                    <InputName className="far fa-comment-dots" inputName="Comment" />
                    <div class="inputForm">
                        <textarea rows="8" cols="55" class="inputFont"></textarea>
                    </div>
                </div>
                <div>
                    <button type="button" class="addButton cancelButton"
                        onClick={this.props.closeAdd}> Ｘ Cancel</button>
                    <button type="button" class="addButton saveButton"> ＋ Save</button>
                </div>
            </div>
        )
    }
}

export { InputTasksForm } 