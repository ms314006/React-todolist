import {ADD_TODOLIST} from "../constants/todoAction-type.js"

export const addTodoList = todoList => ({
    type : ADD_TODOLIST,
    payload : todoList
})