import React from "react"

class InputTask extends React.Component{
    render(){
        return(
            <div>
                <button type="button" class="addButton cancelButton" 
                        onClick={this.props.closeAdd}> Ｘ Cancel</button>
                <button type="button" class="addButton saveButton"> ＋ Save</button>
            </div>)
    }
}

export {InputTask}