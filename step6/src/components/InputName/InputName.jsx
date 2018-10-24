import React from "react"

class InputName extends React.Component{
    render(){
        return(
            <div class="inputName">
                <i class={this.props.className}></i>&nbsp;&nbsp;{this.props.inputName}
            </div>
        )
    }
}

export {InputName}