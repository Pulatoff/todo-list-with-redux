import React from "react";
import TodoList from "./TodoList";

const TodoItem = ({ todos, removeTodo, completedTodo }) => {
  return (
    <ul>
      {todos.map((val) => {
        return (
          <TodoList
            removeTodo={removeTodo}
            completedTodo={completedTodo}
            {...val}
            key={val.id}
          />
        );
      })}
    </ul>
  );
};

export default TodoItem;
