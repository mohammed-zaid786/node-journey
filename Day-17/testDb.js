const db = require('./db');

async function runTest() {
  try {
    // 1. Test connectivity with a simple SELECT NOW() query
    const timeResult = await db.query('SELECT NOW()');
    console.log('Database connected successfully at:', timeResult.rows[0].now);

    // 2. Execute an INSERT using parameterized arguments ($1) to prevent SQL Injection
    const taskTitle = 'Learn Connection Pooling in Node.js';
    const insertQuery = 'INSERT INTO tasks (title) VALUES ($1) RETURNING *';

    const result = await db.query(insertQuery, [taskTitle]);
    console.log('Inserted Task Successfully:', result.rows[0]);

  } catch (err) {
    console.error('Error executing query:', err);
  }
}

runTest();