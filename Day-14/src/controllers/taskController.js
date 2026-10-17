let tasks = [
  { id: 1, title: 'Learn Express Router', completed: false },
  { id: 2, title: 'Master Modular Architecture', completed: true }
];

const getAllTasks = (req, res) => {
  res.json({ success: true, count: tasks.length, data: tasks });
};

const createTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ success: false, message: 'Title is required' });
  }

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json({ success: true, data: newTask });
};

const deleteTask = (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }

  const deletedTask = tasks.splice(taskIndex, 1);
  res.json({ success: true, data: deletedTask[0] });
};

module.exports = { getAllTasks, createTask, deleteTask };