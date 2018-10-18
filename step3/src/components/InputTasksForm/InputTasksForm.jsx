import React from "react"
import { InputName } from "../InputName"

class InputTasksForm extends React.Component {
    render() {
        return (
            <div class="InputTasksForm">
                <div class="InputTask">
                    <InputName className="fas fa-calendar-alt" inputName="Deadline" />
                    <div class="inputForm">
                        <input type="date" class="inputStyle inputDateTime" 
                                value={this.props.date} />
                        &nbsp;&nbsp;
                        <input type="time" class="inputStyle inputDateTime" 
                                value={this.props.time}/>
                    </div>
                    <InputName className="fas fa-file" inputName="File" />
                    <div class="inputForm">
                        <input type="file" class="inputStyle" /><br/>
                        <span class="inputStyle">{this.props.fileName}</span>
                    </div>
                    <InputName className="far fa-comment-dots" inputName="Comment" />
                    <div class="inputForm">
                        <textarea rows="7" cols="55" class="inputStyle">
                            {this.props.comment}
                        </textarea>
                    </div>
                </div>
                <div>
                    <button type="button" class="addButton cancelButton"> Ｘ Cancel</button>
                    <button type="button" class="addButton saveButton"> ＋ Save</button>
                </div>
            </div>
        )
    }
}

export { InputTasksForm } 