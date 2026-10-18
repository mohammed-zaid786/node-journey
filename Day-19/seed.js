const db = require('./db');

const seed = async () => {
  try {
    // Purana data clear karke fresh sample data dalna
    await db.query('DELETE FROM tasks');

    const seedQuery = `
      INSERT INTO tasks (title, description, completed) VALUES 
      ($1, $2, $3),
      ($4, $5, $6);
    `;
    await db.query(seedQuery, [
      'Learn Database Migrations', 'Understand automated table creation', false,
      'Practice Seed Scripts', 'Populate sample development data', true
    ]);

    console.log('Seed completed: Sample data added successfully.');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  }
};

seed();