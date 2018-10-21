import React from "react"
import { connect } from "react-redux"
import { InputTasksForm } from "../InputTasksForm"
import { addTodoList } from "../../actions"

class ConnectInputTask extends React.Component {
    constructor(props){
        super(props)
        this.state = {id:'',name:'',date:'',time:'',file:'',commit:''}
        this.changeState = this.changeState.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
        this.filebox = React.createRef()
    }

    changeState(event){
        let value = event.target.value
        if (event.target.name === "file"){
            value = value.substring(value.lastIndexOf('\\')+1)
        }
        this.setState({[event.target.name]:value})
    }

    submitTodo(){
        //先檢查資料，至少要有名稱
        if(this.state.name === ''){
            alert('待辦事項名稱未輸入！')
        }
        else{
            this.props.addTodoList(this.state)
            alert('成功新增！')
            //關閉新增畫面
            this.props.closeAdd()
            //清空資料
            this.setState({id:'',name:'',date:'',time:'',file:'',commit:''})
            //不受控組件另外處理
            this.filebox.current.value = ''
        }
    }

    render() {
        return (
            <div>
                <div class="inputTaskTitle">
                    <input type="checkbox" class="taskChk" />
                    {/*替該name設定對應的state名稱，然後指定value為state中的值，和增加onChange事件，讓值改變時可以同時寫回`state`*/}
                    <input name="name" type="text" class="taskTitle" placeholder="Type Something Here…" 
                            value={this.state.name} 
                            onChange={this.changeState} />
                    <i class="far fa-star fa-lg icon"></i>
                    <i class="fas fa-pen fa-lg icon icon_edit"></i>
                </div>
                <InputTasksForm closeAdd={this.props.closeAdd}
                                stateData={this.state}
                                changeState={this.changeState}
                                submitTodo = {this.submitTodo}
                                filebox = {this.filebox} />
            </div>)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //使用dispatch操作store
        addTodoList: todoList => dispatch(addTodoList(todoList))
      }    
}

const InputTask = connect(null,mapDispatchToProps)(ConnectInputTask)

export { InputTask }