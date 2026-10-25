const express = require('express');
const app = express();

// Middleware to parse incoming JSON request body
app.use(express.json());

// Test route to check if API is working
app.get('/api/test', (req, res) => {
    res.status(200).json({ 
        status: 'success', 
        message: 'API is working fine!' 
    });
});

// Sample registration route with basic validation
app.post('/api/register', (req, res) => {
    const { username, email } = req.body;
    
    // Check if required fields are missing
    if (!username || !email) {
        return res.status(400).json({ 
            status: 'fail', 
            message: 'All fields are required' 
        });
    }

    // Send success response if data is valid
    res.status(201).json({ 
        status: 'success', 
        data: { username, email } 
    });
});

// Export app for testing purposes (crucial for Supertest)
module.exports = app;