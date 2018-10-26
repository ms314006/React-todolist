import { todoData } from "../constants/todoList.js"
import { ADD_TODOLIST } from "../constants/todoAction-type.js"
import { EDIT_TODOLIST } from "../constants/todoAction-type.js"

const todoListReducer = (state = todoData, action) => {
    switch (action.type) {
        case ADD_TODOLIST: {
            action.payload.id = state.length + 1
            return [...state, action.payload]
        }
        case EDIT_TODOLIST: {
            let newState = state.slice(0) 
            for (let i = 0; i <= newState.length - 1; i++) {
                if (newState[i].id === action.payload.id){
                    newState.splice(i, 1, action.payload)
                    break;
                }
            }
            return newState
        }
        default: {
            return state
        }
    }
}

window.todoData = todoData

export { todoListReducer }