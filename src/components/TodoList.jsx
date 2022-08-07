import React from "react";

const TodoList = ({ id, completed, text, completedTodo, removeTodo }) => {
  console.log(completed);
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          completedTodo(id);
        }}
      />
      <span>{text}</span>
      <span className="delete" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoList;
