import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import AddTaskPage from "./pages/AddTaskPage";
import HomePage from "./pages/HomePage";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <span>   </span>       
        <Link to="/add">Add Task</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddTaskPage onTaskAdded={handleTaskAdded} />} />
      </Routes>
    </Router>
  );
};

export default App;