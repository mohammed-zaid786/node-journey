const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data from request body
app.use(express.json());

// Setup CORS to allow requests from other domains
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'x-api-key']
}));

// 1. Tracks how much time each request takes to process and complete
const requestProfiler = (req, res, next) => {
    const start = Date.now();
    req.requestTime = start; // Attach timestamp to the request object

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`[Profiler] ${req.method} ${req.originalUrl} | Status: ${res.statusCode} | Duration: ${duration}ms`);
    });

    next(); // Pass control to the next middleware or route
};

app.use(requestProfiler);

// 2. Simple guard to check if the request contains a valid API key
const apiKeyGuard = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    const VALID_API_KEY = "my-super-secret-key-123";

    if (!apiKey) {
        return res.status(401).json({ error: "Access Denied. Missing 'x-api-key' header." });
    }

    if (apiKey !== VALID_API_KEY) {
        return res.status(403).json({ error: "Invalid API Key provided." });
    }

    next(); // Key is valid, proceed further
};

// --- ROUTES ---

// Public route that anyone can access freely
app.get('/', (req, res) => {
    res.json({ message: "Welcome to middlewareLab.js home page!" });
});

// Protected route - requires a valid API key to access
app.get('/api/protected-data', apiKeyGuard, (req, res) => {
    res.json({
        success: true,
        message: "Welcome to the secure dashboard!",
        requestTimestamp: req.requestTime
    });
});

// Starting the server
app.listen(PORT, () => {
    console.log(`middlewareLab running on http://localhost:${PORT}`);
});