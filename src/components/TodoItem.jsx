import React from "react";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";

const TodoItem = ({ removeTodo, completedTodo }) => {
  const todos = useSelector((store) => store.todos.todos);
  return (
    <ul>
      {todos.map((val) => {
        return <TodoList {...val} key={val.id} />;
      })}
    </ul>
  );
};

export default TodoItem;
