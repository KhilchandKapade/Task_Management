import React from "react";

const TaskList = ({ tasks, onToggleDone }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h2>{task.name}</h2>
          <p>{task.description}</p>
          <button onClick={() => onToggleDone(task.id)}>
            {task.done ? "Mark as Undone" : "Mark as Done"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;