import {todoData} from "../constants/todoList.js"
import {ADD_TODOLIST} from "../constants/todoAction-type.js"

const todoListReducer = (state = todoData,action) =>{
    switch(action.type){
        case ADD_TODOLIST:{
            action.payload.id = state.length + 1
            return [...state,action.payload]
        }
        default:{
            return state
        }
    }
}

export {todoListReducer}