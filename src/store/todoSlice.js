import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTodos = createAsyncThunk(
  "todos/getAllTodos",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos?_limit=5"
      );

      if (!response.ok) throw new Error("Something get wrong!!!!");
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: "DELETE",
      });
      dispatch(removeTodo({ id }));
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
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
  extraReducers: {
    [getAllTodos.pending]: (state, action) => {
      state.status = "loading";
      state.error = null;
    },
    [getAllTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
    [getAllTodos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { addTodos, removeTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
