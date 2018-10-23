import React from "react"
import { connect } from "react-redux"
import { InputTasksForm } from "../InputTasksForm"
import { addTodoList } from "../../actions"

class ConnectInputTask extends React.Component {
    constructor(props){
        super(props)
        this.state = {id:'',name:'',date:'',time:'',file:'',commit:'',important:'',complete:false}
        this.changeState = this.changeState.bind(this)
        this.submitTodo = this.submitTodo.bind(this)
        this.tagComplete = this.tagComplete.bind(this)
        this.tagImportant = this.tagImportant.bind(this)
        this.filebox = React.createRef()

        this.star = React.createRef()
        this.inputTasksTitle = React.createRef()
        this.name = React.createRef()
    }

    tagComplete(event) {
        if (event.target.checked) {
            this.name.current.classList.add('complete')
        }
        else {
            this.name.current.classList.remove('complete')
        }
        this.setState({complete:event.target.checked})
    }

    tagImportant() {
        //取得目前icon的class名稱
        let star = this.star.current
        let nowClass = star.className
        //如果現在不是重要的就把它變重要的
        if (this.state.important == '') {
            //就把星星變成填滿的icon
            star.className = nowClass.replace('far fa-star', 'fas fa-star')
            //替星星的Icon增加class:iconImportant
            star.classList.add('iconImportant')
            //替div和輸入框的背景增加class:important
            this.inputTasksTitle.current.classList.add("important")
            this.name.current.classList.add("important")
            //改變important的狀態
            this.setState({important:'Y'})
        }
        else {
            //就上方的反過來
            star.className = nowClass.replace('fas fa-star', 'far fa-star')
            star.classList.remove('iconImportant')
            this.inputTasksTitle.current.classList.remove("important")
            this.name.current.classList.remove("important")
            this.setState({important:''})
        }
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
            //初始化資料資料
            this.resetData()
            this.setState({id:'',name:'',date:'',time:'',file:'',commit:'',important:'',complete:false})
            //不受控組件另外處理
            this.filebox.current.value = ''
            //星星要點掉
            this.star.current.className = this.star.current.className.replace('fas fa-star', 'far fa-star')
            this.star.current.classList.remove('iconImportant')
            this.inputTasksTitle.current.classList.remove("important")
            this.name.current.classList.remove("important")
            //刪除線的樣式也要拿掉
            this.name.current.classList.remove('complete')
        }
    }

resetData(){
    
}

    render() {
        return (
            <div>
                <div ref={this.inputTasksTitle} class="inputTaskTitle">
                    <input type="checkbox" class="taskChk" checked={this.state.complete} onChange={this.tagComplete}  />
                    {/*替該name設定對應的state名稱，然後指定value為state中的值，和增加onChange事件，讓值改變時可以同時寫回`state`*/}
                    <input ref={this.name} name="name" type="text" class="taskTitle" placeholder="Type Something Here…" 
                            value={this.state.name} 
                            onChange={this.changeState} />
                    <i class="far fa-star fa-lg icon" onClick={this.tagImportant} ref={this.star}></i>
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