// src/server.js
const express = require('express');
const pool = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint for cloud monitoring and uptime checks
app.get('/api/health', async (req, res) => {
  try {
    // Check database connectivity
    await pool.query('SELECT 1');
    res.status(200).json({
      status: 'success',
      message: 'Server is healthy and database is connected',
      environment: process.env.NODE_ENV || 'development',
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Database connection failed',
      error: err.message
    });
  }
});

// Start the server (Only if not required by tests)
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;