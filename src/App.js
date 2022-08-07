import { useRef, useState } from "react";
import TodoItem from "./components/TodoItem";
import InputField from "./components/InputField";
import "./App.css";

function App() {
  const valueRef = useRef(null);
  const [todos, setTodos] = useState([]);

  const addTodos = (e) => {
    if (valueRef.current.value.trim().length) {
      console.log(111);
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text: valueRef.current.value,
          completed: false,
        },
      ]);
    }
  };

  const removeTodo = (id) => {
    setTodos(
      todos.filter((val) => {
        return val.id !== id;
      })
    );
  };

  const completedTodo = (id) => {
    todos.map((val) => {
      if (val.id === id) {
        val.completed = !val.completed;
      }
      return val;
    });
  };

  return (
    <div>
      <InputField valueRef={valueRef} addTodos={addTodos} />
      <TodoItem
        todos={todos}
        removeTodo={removeTodo}
        completedTodo={completedTodo}
      />
    </div>
  );
}

export default App;
