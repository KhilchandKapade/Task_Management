export const getTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];

export const saveTask = (task) => {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const updateTask = (updatedTask) => {
  let tasks = getTasks();
  tasks = tasks.map((task) =>
    task.id === updatedTask.id ? updatedTask : task
  );
  localStorage.setItem("tasks", JSON.stringify(tasks));
};