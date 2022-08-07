import React from "react";

const InputField = ({ valueRef, addTodos }) => {
  return (
    <label>
      <input type="text" ref={valueRef} placeholder="enter what you do" />
      <button onClick={addTodos}>Enter</button>
    </label>
  );
};

export default InputField;
