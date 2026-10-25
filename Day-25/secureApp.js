const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

// Basic security middleware setup
app.use(helmet());
app.use(cors());

// Limit repeated requests from the same IP to prevent brute-force attacks
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: "Too many requests from this IP, please try again after 15 minutes."
});
app.use(limiter);

app.use(express.json());

// Custom error class to handle operational errors cleanly
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

// Test route to check error handling
app.get('/api/test-error', (req, res, next) => {
    // Pass custom error to the next middleware
    next(new AppError("Requested resource not found on this server", 404));
});

// Centralized 4-argument error handling middleware (must be placed at the very bottom)
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        stack: err.stack
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Secure app is running on port 3000');
});