// importing packages
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(express.json());

// array to store users temporarily
const users = [];

// 1. register route
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, password, role } = req.body;
    
    // check if user already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // hashing password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { 
      id: users.length + 1, 
      username, 
      password: hashedPassword, 
      role: role || 'user' 
    };
    
    users.push(newUser);
    res.status(201).json({ message: 'Registered successfully', userId: newUser.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. login route
app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // comparing password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    // creating jwt token
    const payload = { userId: user.id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- DAY 23: PROTECTED ROUTES & MIDDLEWARES ---

// middleware to verify token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ error: 'Token missing, unauthorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }
    req.user = user; // attaching decoded user to request
    next();
  });
}

// protected user profile route
app.get('/api/user/profile', authenticateToken, (req, res) => {
  res.status(200).json({ 
    message: 'Access granted to profile', 
    userInfo: req.user 
  });
});

// admin role check middleware (RBAC)
function verifyAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied: Admins only' });
  }
  next();
}

// protected admin dashboard route
app.get('/api/admin/dashboard', authenticateToken, verifyAdmin, (req, res) => {
  res.status(200).json({ 
    message: 'Welcome to Admin Dashboard', 
    adminData: req.user 
  });
});

// starting server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});