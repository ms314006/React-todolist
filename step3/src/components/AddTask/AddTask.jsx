import React from "react"
import {InputTask} from "../InputTask"

class AddTask extends React.Component{

    openAdd(){
        document.getElementById('addTask').style.display='none'
        document.getElementById('inputTask').style.display=''
    }

    closeAdd(){
        console.log('eee')
        document.getElementById('addTask').style.display=''
        document.getElementById('inputTask').style.display='none'
    }

    render(){
        return(
            <div>
                <div>
                    <input id="addTask" value=" ＋ Add Task" onClick={this.openAdd} />
                </div>
                <div id="inputTask" style={{display:'none'}}>
                    <InputTask closeAdd={this.closeAdd} />
                </div>
            </div>
        )
    }
}

export {AddTask}