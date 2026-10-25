// src/config/db.js
const { Pool } = require('pg');
require('dotenv').config();

// Check if the environment is production
const isProduction = process.env.NODE_ENV === 'production';

// Configure connection string and SSL settings based on environment
const connectionString = isProduction 
  ? process.env.DATABASE_URL 
  : process.env.DATABASE_URL; // Can use local dev URL or test URL

const pool = new Pool({
  connectionString,
  // In production, cloud databases (like Neon, Render) require SSL with rejectUnauthorized: false
  ssl: isProduction ? { rejectUnauthorized: false } : false,
  max: 20, // Maximum pool connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = pool;