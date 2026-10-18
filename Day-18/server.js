const express = require('express');
require('dotenv').config();
const db = require('./db');

const app = express();
app.use(express.json());

// 1. GET all tasks from PostgreSQL
app.get('/tasks', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// 2. POST a new task using RETURNING *
app.post('/tasks', async (req, res) => {
  try {
    const { title, description } = req.body;
    const query = 'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *';
    const result = await db.query(query, [title, description]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// 3. DELETE a task with 404 check using rowCount
app.delete('/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Task not found' });
    }
    
    res.json({ message: 'Task deleted successfully', deletedTask: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});