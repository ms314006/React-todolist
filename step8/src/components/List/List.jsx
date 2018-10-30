import React from "react"
import { connect } from "react-redux"
import { InputTask } from "../InputTask"
import { editTodoList } from "../../actions"

class ConnectList extends React.Component {

    constructor(props) {
        super(props)
        this.changeState = this.changeState.bind(this)
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)

        this.list = React.createRef()

        this.state = {important:this.props.listData.important
                        ,complete:this.props.listData.complete
                        ,editTasks:null}

    }

    changeState(type) {
        switch (type) {
            case "complete": {
                this.setState({ complete: window.event.target.checked })
                break;
            }
            case "important": {
                if (this.state.important == '')
                    this.setState({ important: 'Y' })
                else
                    this.setState({ important: '' })
                break;
            }
        }
    }

    componentDidUpdate(){
        this.props.editTodoList(this.state)
    }

    openEdit(event) {
        if (event.target.className.indexOf('icon') === -1 &&
            event.target.className.indexOf('taskChk') === -1) {
            this.list.current.style.display = 'none'
            
            this.setState({editTasks:(<InputTask closeAdd={this.closeEdit}
                listData={this.props.listData}
                changeState={this.changeState.bind(this)}
                editTodoList={this.props.editTodoList} />)})

        }
    }

    closeEdit() {
        this.list.current.style.display = ''
        this.setState({editTasks:null})
    }


    render() {

        //初始化組件
        return (
            <div class="listBlock">
                <div class={' list ' + (this.state.important == 'Y' ? ' important ' : '')}
                    onClick={this.openEdit}
                    ref={this.list}>

                    <input type="checkbox" class="taskChk"
                        checked={this.state.complete}
                        onChange={this.changeState.bind(this, 'complete')} />

                    <input type="text"
                        class={' taskTitle ' +
                            (this.state.complete ? ' complete ' : '') +
                            (this.state.important ? ' important ' : '')}
                        value={this.props.listData.name} />

                    <i class={this.state.important == 'Y' ?
                        ' fas fa-star fa-lg iconImportant icon' : ' far fa-star fa-lg icon'}
                        onClick={this.changeState.bind(this, 'important')}></i>

                    <i class="fas fa-pen fa-lg icon"></i>
                    <div class="listIcon">
                        {this.props.listData.date != '' ?
                            <i class="far fa-calendar-alt icon"></i> : ''}
                        {this.props.listData.date != '' ?
                            ` ${this.props.listData.date.substring(5).replace('-', '/')} ` : ''}

                        {this.props.listData.file != '' ?
                            <i class="fas fa-file icon"></i> : ''}

                        {this.props.listData.commit != '' ?
                            <i class="far fa-comment-dots icon"></i> : ''}
                    </div>
                </div>

                <div>
                    {this.state.editTasks}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editTodoList: todoList => dispatch(editTodoList(todoList))
    }
}

const List = connect(null, mapDispatchToProps)(ConnectList)

export { List }


