import React from "react";
import AddTask from "../components/AddTask";

const AddTaskPage = ({ onTaskAdded }) => {
  return (
    <div>
      <h1>Add Task</h1>
      <AddTask onTaskAdded={onTaskAdded} />
    </div>
  );
};

export default AddTaskPage;