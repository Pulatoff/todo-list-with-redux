import { useRef, useState } from "react";
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
    todos.filter((val) => {
      if (val.id !== id) return val;

      return {
        ...val,
        completed: !val.completed,
      };
    });
  };

  return (
    <div>
      <label>
        <input type="text" ref={valueRef} placeholder="enter what you do" />
        <button onClick={addTodos}>Enter</button>
      </label>
      <ul>
        {todos.map((val) => {
          return (
            <li key={val.id}>
              <input
                type="checkbox"
                checked={val.checked}
                onChange={() => completedTodo(val.id)}
              />
              <span>{val.text}</span>
              <span className="delete" onClick={() => removeTodo(val.id)}>
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
