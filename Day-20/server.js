const express = require('express');
require('dotenv').config();
const db = require('./db');

const app = express();
app.use(express.json());

// 1. GET all items with their categories
app.get('/items', async (req, res) => {
  try {
    const query = `
      SELECT items.id, items.name, items.price, categories.name AS category_name 
      FROM items 
      LEFT JOIN categories ON items.category_id = categories.id;
    `;
    const result = await db.query(query);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 2. POST a new item safely using parameterized queries
app.post('/items', async (req, res) => {
  try {
    const { name, price, category_id } = req.body;
    const query = 'INSERT INTO items (name, price, category_id) VALUES ($1, $2, $3) RETURNING *';
    const result = await db.query(query, [name, price, category_id]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// 3. DELETE an item with 404 rowCount check
app.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query('DELETE FROM items WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Item not found' });
    }

    res.json({ message: 'Item deleted successfully', deletedItem: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Day-20 Inventory Server running on port ${PORT}`);
});