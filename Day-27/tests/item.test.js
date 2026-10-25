const pool = require('../config/db');

describe('Database Integration Tests with Isolation', () => {
  // Clear the database table before every single test to maintain isolation
  beforeEach(async () => {
    await pool.query('DELETE FROM items');
  });

  // Close the database connection pool after all tests finish so Jest exits cleanly
  afterAll(async () => {
    await pool.end();
  });

  test('Should create a new item in the database', async () => {
    const res = await pool.query(
      'INSERT INTO items (name, description) VALUES ($1, $2) RETURNING *',
      ['Test Item', 'Test Description']
    );
    expect(res.rows[0].name).toBe('Test Item');
  });

  test('Should retrieve all items from the database', async () => {
    await pool.query('INSERT INTO items (name, description) VALUES ($1, $2)', ['Item 1', 'Desc 1']);
    const res = await pool.query('SELECT * FROM items');
    expect(res.rows.length).toBe(1);
  });
});