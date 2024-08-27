import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div className="TodoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="Todotext"
          placeholder="What is your task today?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="TodoForm-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
