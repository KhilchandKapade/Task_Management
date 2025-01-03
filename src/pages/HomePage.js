import React, { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import { getTasks, updateTask } from "../utils/localStorageHelper";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleToggleDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    updatedTasks.forEach(updateTask);
  };

  return (
    <div className="home-page">
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onToggleDone={handleToggleDone} />
    </div>
  );
};

export default HomePage;