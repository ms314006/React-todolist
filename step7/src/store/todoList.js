import {createStore} from "redux"
import {todoListReducer} from "../reducers"

const todoListStore = createStore(todoListReducer)

window.store = todoListStore

export {todoListStore}