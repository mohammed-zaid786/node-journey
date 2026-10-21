const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(express.json());

// Register Route with bcrypt hashing
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }

    // 1. Generate salt and hash the password securely
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // 2. Save user and hashed password to database using parameterized queries
    const result = await db.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username, created_at',
      [username, hashedPassword]
    );

    // 3. Send success response
    res.status(201).json({
      message: 'User registered successfully with salted password hash!',
      user: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    if (err.code === '23505') {
      return res.status(400).json({ error: 'Username already exists' });
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Day-21 Auth Server running on port ${PORT}`);
});