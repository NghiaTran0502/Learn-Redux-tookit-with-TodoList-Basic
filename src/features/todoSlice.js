import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   todoList: []
}

const todoSlice = createSlice({
   name: 'todos',
   initialState,
   reducers: {
      saveTodo: (state, action) => {
         state.todoList.push(action.payload);
      },
      setCheck: (state, action) => {
         state.todoList.map(todo => {
            if (action.payload === todo.id) {
               todo.done = !todo.done
            }
         })
      }
   }
});

export const {
   saveTodo,
   setCheck
} = todoSlice.actions

export const selectTodoList = state => state.todos.todoList;

export default todoSlice.reducer