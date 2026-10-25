// Import the Pool class from pg module to handle database connection pooling
const { Pool } = require('pg');
require('dotenv').config();

// Determine whether the environment is for testing or development
const connectionString = 
  process.env.NODE_ENV === 'test' 
    ? process.env.TEST_DATABASE_URL 
    : process.env.DATABASE_URL;

// Create a new Pool instance with the selected connection string
const pool = new Pool({
  connectionString,
});

module.exports = pool;