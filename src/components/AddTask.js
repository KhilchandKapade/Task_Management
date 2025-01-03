import React, { useState } from "react";
import { saveTask } from "../utils/localStorageHelper";

const AddTask = ({ onTaskAdded }) => {
  const [task, setTask] = useState({ name: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...task, id: Date.now(), done: false };
    saveTask(newTask);
    onTaskAdded(newTask);
    setTask({ name: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;