import { createSlice } from "@reduxjs/toolkit";
import { todos } from "../sampleTodos";

const todoSlice = createSlice({
  name: "todos",
  initialState: todos,
  reducers:{
    addTodo:(state, action)=>{
        const todo = {
          id: Date.now(),
          name: action.payload.name,
          date: action.payload.date,
          title: action.payload.title,
          description: action.payload.description,
          expireyDate: action.payload.expireyDate,
          completed: false,
          userImg: "url",
          todoImg: "url",
        };
        state.push(todo)
    },
    deleteTodo:(state, action) =>{
        return state.filter((todo) => todo.id !== action.payload.id)
    },
    completeTodo:(state, action)=>{
        state.map((todo)=>{
            if(todo.id == action.payload.id){
                todo.completed = true
            }
            return todo
        })
    }
  }
});

export const {addTodo, deleteTodo, completeTodo} = todoSlice.actions

export default todoSlice.reducer