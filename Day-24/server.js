const express = require('express');
const { z } = require('zod');

const app = express();
app.use(express.json());

// Define Zod schema to validate user registration input
const registerSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Please provide a valid email format"),
    password: z.string().min(8, "Password must be at least 8 characters long")
});

// Reusable validation middleware to check request body against schema
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next(); // Proceed to the next middleware or route handler if valid
    } catch (error) {
        // Block request at application boundary if validation fails
        return res.status(400).json({
            error: "Validation Failed",
            details: error.errors.map(err => err.message)
        });
    }
};

// Register route protected with Zod validation middleware
app.post('/api/auth/register', validate(registerSchema), (req, res) => {
    const { username, email, password } = req.body;

    res.status(201).json({
        message: "User successfully registered and validated via Zod!",
        data: { username, email }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});