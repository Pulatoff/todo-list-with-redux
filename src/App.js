import { useRef, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import InputField from "./components/InputField";
import { useDispatch } from "react-redux/es/exports";
import { addTodos, getAllTodos } from "./store/todoSlice";
import "./App.css";

function App() {
  const text = useRef("");
  const dispatch = useDispatch();
  const addTask = () => dispatch(addTodos({ text: text.current?.value }));

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  return (
    <div>
      <InputField valueRef={text} addTodos={addTask} />
      <TodoItem />
    </div>
  );
}

export default App;
