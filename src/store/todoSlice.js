import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },

    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    completedTodo(state, action) {
      const todoCompleted = state.todos.find(
        (val) => val.id === action.payload.id
      );
      todoCompleted.completed = !todoCompleted.completed;
    },
  },
});

export const { addTodos, removeTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
