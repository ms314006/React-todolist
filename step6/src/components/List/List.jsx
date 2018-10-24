import React from "react"
import { InputTask } from "../InputTask"

class List extends React.Component {

    constructor(props) {
        super(props)
        this.tagComplete = this.tagComplete.bind(this)
        this.tagImportant = this.tagImportant.bind(this)
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)

        this.editTasks = React.createRef()
        this.list = React.createRef()

        this.state = {important:this.props.listData.important
                        ,complete:this.props.listData.complete}
    }

    tagComplete(event) {
        this.setState({complete:event.target.checked})
    }

    tagImportant() {
        //如果現在不是重要的就把它變重要的
        if (this.state.important == '') {
            this.setState({important:'Y'})
        }
        else {
            this.setState({important:''})
        }
    }

    openEdit(event) {
        if (event.target.className.indexOf('icon') === -1 &&
            event.target.className.indexOf('taskChk') === -1) {
            this.list.current.style.display = 'none'
            this.editTasks.current.style.display = ''
        }
    }

    closeEdit() {
        this.editTasks.current.style.display = 'none'
        this.list.current.style.display = ''
    }


    render() {
        //初始化組件
        return (
            <div class="listBlock">
                <div class={' list ' + (this.state.important == 'Y' ? ' important ' : '')} 
                        onClick={this.openEdit}
                        ref = {this.list}>

                    <input type="checkbox" class="taskChk" 
                            checked={this.state.complete} 
                            onChange={this.tagComplete} />
                            
                    <input type="text" 
                            class={' taskTitle ' + 
                                    (this.state.complete ? ' complete ' : '') +
                                    (this.state.important ? ' important ' : '') }
                            value={this.props.listData.name}  />

                    <i class={this.state.important == 'Y' ? 
                            ' fas fa-star fa-lg iconImportant icon' : ' far fa-star fa-lg icon'}
                            onClick={this.tagImportant}></i>

                    <i class="fas fa-pen fa-lg icon"></i>
                    <div class="listIcon">
                        {this.props.listData.date != '' ? 
                        <i class="far fa-calendar-alt icon"></i>: ''}
                        {this.props.listData.date != '' ?
                        ` ${this.props.listData.date.substring(5).replace('-','/')} ` : ''}
                        
                        {this.props.listData.file != '' ? 
                        <i class="fas fa-file icon"></i> : ''}

                        {this.props.listData.commit != '' ? 
                        <i class="far fa-comment-dots icon"></i> : ''}
                    </div>
                </div>
                
                <div ref={this.editTasks} style={{ display: "none" }}>
                    <InputTask closeAdd={this.closeEdit} 
                                listData = {this.props.listData}/>
                </div>
            </div>
        )
    }
}

export { List }