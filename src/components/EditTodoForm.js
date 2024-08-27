import React, { useState } from "react";

const EditTodoForm = ({ updateTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    updateTodo(value, task.id);
    setValue("");
  };

  return (
    <div className="EditTodoForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="Todotext"
          placeholder="Update Task?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="TodoForm-btn">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTodoForm;
