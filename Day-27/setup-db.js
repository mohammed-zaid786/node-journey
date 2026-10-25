process.env.NODE_ENV = 'test';
const pool = require('./config/db');

async function setupDatabase() {
  try {
    // Drop the items table if it already exists to ensure a clean slate
    await pool.query('DROP TABLE IF EXISTS items;');
    
    // Create the items table with id, name, and description columns
    await pool.query(`
      CREATE TABLE items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT
      );
    `);
    
    console.log('Database table "items" created successfully!');
  } catch (err) {
    console.error('Error creating database table:', err);
  } finally {
    // Close the database pool connection
    await pool.end();
  }
}

setupDatabase();