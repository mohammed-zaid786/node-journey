const express = require("express");      //import express
const cors = require("cors");

const app = express();
const PORT = 3000;


app.use(cors());  //middleware
// To read JSON data sent by the client
app.use(express.json());

// Initial tasks                  //created an array to store task inmemory and used to nextId to assigned each new task
let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Learn Express", completed: false }
];

let nextId = 3;

// GET: Get all tasks & it will return all task                            
app.get("/api/tasks", (req, res) => {
  res.status(200).json({
    success: true,
    data: tasks
  });
});

// GET: Get one task by ID  & if id will not found it return 404
app.get("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: "Invalid task ID"
    });
  }

  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

// POST: Create a new task
app.post("/api/tasks", (req, res) => {
  const body = req.body || {};
  const title = body.title;
  const completed = body.completed;

  if (typeof title !== "string" || title.trim() === "") {
    return res.status(400).json({
      message: "Please provide a valid title"
    });
  }

  if (
    completed !== undefined &&
    typeof completed !== "boolean"
  ) {
    return res.status(400).json({
      message: "Completed must be true or false"
    });
  }

  const newTask = {
    id: nextId,
    title: title.trim(),
    completed: completed === undefined ? false : completed
  };

  nextId++;
  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    data: newTask
  });
});

// PUT: Update the complete task (In PUT send title and completed task both)
app.put("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: "Invalid task ID"
    });
  }

  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  const body = req.body || {};
  const title = body.title;
  const completed = body.completed;

  if (
    typeof title !== "string" ||
    title.trim() === "" ||
    typeof completed !== "boolean"
  ) {
    return res.status(400).json({
      message: "Please provide a valid title and completed value"
    });
  }

  task.title = title.trim();
  task.completed = completed;

  res.status(200).json({
    message: "Task updated successfully",
    data: task
  });
});

// PATCH: Update only selected fields   (It will update only specific field that are given on the req)
app.patch("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: "Invalid task ID"
    });
  }

  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  const body = req.body || {};
  const hasTitle = Object.hasOwn(body, "title");
  const hasCompleted = Object.hasOwn(body, "completed");

  if (!hasTitle && !hasCompleted) {
    return res.status(400).json({
      message: "Please provide a field to update"
    });
  }

  if (hasTitle) {
    if (typeof body.title !== "string" || body.title.trim() === "") {
      return res.status(400).json({
        message: "Title must be a non-empty string"
      });
    }

    task.title = body.title.trim();
  }

  if (hasCompleted) {
    if (typeof body.completed !== "boolean") {
      return res.status(400).json({
        message: "Completed must be true or false"
      });
    }

    task.completed = body.completed;
  }

  res.status(200).json({
    message: "Task updated successfully",
    data: task
  });
});

// DELETE: Remove a task
app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({
      message: "Invalid task ID"
    });
  }

  const index = tasks.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  tasks.splice(index, 1);

  res.status(204).send();
});

// Handle routes that do not exist
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

// Handle unexpected errors
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      message: "Invalid JSON data"
    });
  }

  console.error(err);

  res.status(500).json({
    message: "Internal server error"
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



