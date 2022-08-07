import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { removeTodo, completedTodo } from "../store/todoSlice";

const TodoList = ({ id, completed, title }) => {
  const dispatch = useDispatch();

  // const removeTodo = () => dispatch(removeTodo(id));
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          dispatch(completedTodo({ id }));
        }}
      />
      <span>{title}</span>
      <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span>
    </li>
  );
};

export default TodoList;
